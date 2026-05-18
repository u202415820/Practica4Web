<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRegistrationStore } from '../../application/registration.store.js';

const { t } = useI18n();
const store = useRegistrationStore();

const ticketInput = ref('');
const resultStatus = ref(null); // 'found' | 'invalid' | 'already'
const foundAttention = ref(null);
const foundBranch = ref(null);

onMounted(() => {
    if (!store.attentionsLoaded) store.fetchAttentions();
    if (!store.branchesLoaded) store.fetchBranches();
});

async function registerIn() {
    const attention = store.getAttentionByTicket(ticketInput.value);

    if (!attention) {
        resultStatus.value = 'invalid';
        foundAttention.value = null;
        foundBranch.value = null;
        return;
    }

    if (attention.registerInAt) {
        resultStatus.value = 'already';
        foundAttention.value = null;
        foundBranch.value = null;
        return;
    }

    attention.registerInAt = new Date().toISOString();
    await store.updateAttention(attention);

    foundAttention.value = attention;
    foundBranch.value = store.getBranchById(attention.branchId);
    resultStatus.value = 'found';
}
</script>

<template>
  <div>
    <h1>{{ t('attentions.title') }}</h1>

    <div class="flex gap-2 align-items-center mt-3">
      <label for="ticket">{{ t('attentions.ticket-identifier') }}</label>
      <pv-input-text id="ticket" v-model="ticketInput" :placeholder="t('attentions.ticket-identifier')" />
      <pv-button :label="t('attentions.register-in')" @click="registerIn" :disabled="!ticketInput" />
    </div>

    <div class="mt-4" v-if="resultStatus === 'invalid'">
      <p class="text-red-500">{{ t('attentions.invalid-ticket') }}</p>
    </div>

    <div class="mt-4" v-if="resultStatus === 'already'">
      <p class="text-orange-500">{{ t('attentions.already-registered') }}</p>
    </div>

    <div class="mt-4" v-if="resultStatus === 'found' && foundAttention && foundBranch">
      <p><strong>{{ t('attentions.branch-id') }}:</strong> {{ foundBranch.id }}</p>
      <p><strong>{{ t('attentions.branch-name') }}:</strong> {{ foundBranch.name }}</p>
      <p><strong>{{ t('attentions.branch-description') }}:</strong> {{ foundBranch.description }}</p>
      <p><strong>{{ t('attentions.first-name') }}:</strong> {{ foundAttention.firstName }}</p>
      <p><strong>{{ t('attentions.last-name') }}:</strong> {{ foundAttention.lastName }}</p>
      <p><strong>{{ t('attentions.registered-in-at') }}:</strong> {{ foundAttention.registerInAt }}</p>
    </div>
  </div>
</template>
