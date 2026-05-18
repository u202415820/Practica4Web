<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();
const unavailableRoute = router.currentRoute.value.fullPath;

function goHome() {
  router.push('/home');
}
</script>

<template>
  <div>
    <h1>{{ t('page-not-found.title') }}</h1>
    <p>{{ t('page-not-found.content', { 'unavailable-route': unavailableRoute }) }}</p>
    <pv-button :label="t('page-not-found.go-home')" @click="goHome" />
  </div>
</template>