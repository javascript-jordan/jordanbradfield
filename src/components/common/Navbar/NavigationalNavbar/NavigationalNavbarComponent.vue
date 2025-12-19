<script lang="ts" setup>
import { ROUTES } from "@/router";
</script>
<template>
  <v-app-bar id="navigation-navbar" class="p-x-1" color="primary" :elevation="10">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title><h4>Jordan Bradfield</h4></v-app-bar-title>
    <v-tabs class="links">
      <v-tab
        v-for="(tab, i) in ROUTES"
        :prepend-icon="tab.icon"
        :key="`route-${tab.name}-${i}`"
        :text="tab.name"
        :to="{ name: tab.name }"
      >
      </v-tab>
    </v-tabs>
    <template v-slot:append>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>
<style lang="scss">
#navigation-navbar {
  position: relative !important;
}
</style>
