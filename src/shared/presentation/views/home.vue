<script setup>
import { onMounted, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRegistrationStore } from '../../../registration/application/registration.store.js';
import BranchSummary from '../../../registration/presentation/views/branch-summary.vue';

const { t } = useI18n();
const store = useRegistrationStore();
const { branches } = toRefs(store);

onMounted(() => {
    if (!store.branchesLoaded) store.fetchBranches();
    if (!store.attentionsLoaded) store.fetchAttentions();
});
</script>

<template>
  <div>
    <h1>{{ t('home.title') }}</h1>
    <p>{{ t('home.content') }}</p>
    <h2>{{ t('home.registered-branches') }}</h2>
    <div class="grid">
      <div v-for="branch in branches" :key="branch.id" class="col-12 md:col-6">
        <branch-summary :branch="branch" />
      </div>
    </div>
  </div>
</template>
