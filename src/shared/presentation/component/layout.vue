<script setup>
import LanguageSwitcher from './language-switcher.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <pv-toast />
  <pv-toolbar>
    <template #start>
      <img src="https://logo.clearbit.com/bbva.pe" alt="BBVA logo" height="32" class="mr-2" />
      <span class="font-bold">Banco Bilbao Vizcaya Argentaria, S.A.</span>
    </template>
    <template #center>
      <div class="flex gap-3">
        <router-link to="/home">{{ t('option.home') }}</router-link>
        <router-link to="/registration/branch-registerins/new">{{ t('option.attentions') }}</router-link>
      </div>
    </template>
    <template #end>
      <language-switcher />
    </template>
  </pv-toolbar>
  <div class="p-4">
    <router-view />
  </div>
</template>
