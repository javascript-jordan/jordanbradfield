<script lang="ts" setup></script>
<template>
  <v-app-bar id="navigation-navbar" class="p-x-1" color="primary" :elevation="6">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Application Bar</v-app-bar-title>
    <v-tabs class="links">
      <v-tab text="Tab 1"></v-tab>
      <v-tab text="Tab 2"></v-tab>
      <v-tab text="Tab 3"></v-tab>
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
