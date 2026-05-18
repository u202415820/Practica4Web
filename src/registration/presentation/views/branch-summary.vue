<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRegistrationStore } from '../../application/registration.store.js';

const { t } = useI18n();
const store = useRegistrationStore();

const props = defineProps({
    branch: { type: Object, required: true }
});

const branchAttentions = computed(() => {
    return store.getAttentionsByBranchId(props.branch.id);
});

const registeredAttentions = computed(() => {
    return branchAttentions.value.length;
});

const attentionPercentage = computed(() => {
    const total = branchAttentions.value.length;
    if (total === 0) return '0%';
    const checkedIn = branchAttentions.value.filter(a => a.registerInAt !== null).length;
    const pct = (checkedIn / total) * 100;
    return `${pct.toFixed(0)}%`;
});
</script>

<template>
  <pv-card>
    <template #title>
      {{ branch.name }}
    </template>
    <template #content>
      <p><strong>{{ t('branch-summary.address') }}:</strong> {{ branch.address }}</p>
      <p><strong>{{ t('branch-summary.description') }}:</strong> {{ branch.description }}</p>
      <p><strong>{{ t('branch-summary.capacity') }}:</strong> {{ branch.capacity }}</p>
      <p><strong>{{ t('branch-summary.opened-at') }}:</strong> {{ branch.openedAt }}</p>
    </template>
    <template #footer>
      <p><strong>{{ t('branch-summary.registered-attentions') }}:</strong> {{ registeredAttentions }}</p>
      <p><strong>{{ t('branch-summary.attention-percentage') }}:</strong> {{ attentionPercentage }}</p>
    </template>
  </pv-card>
</template>
