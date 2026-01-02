<script lang="ts" setup>
import TranslationService from "@/services/TranslationService/TranslationService";
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { smAndDown } = useDisplay();
const slogan = computed(() =>
  smAndDown.value ? "Jordan Bradfield" : TranslationService.translate("NAVBAR.PROMOTION"),
);
</script>
<template>
  <div id="promotional-navbar">
    <v-toolbar
      class="toolbar bg-grey-darken-4"
      density="compact"
      :elevation="2"
      :title="slogan"
    ></v-toolbar>
  </div>
</template>
<style lang="scss" scoped>
#promotional-navbar {
  header {
    z-index: 1200;
  }
  :deep(.v-toolbar-title) {
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }
}
</style>
