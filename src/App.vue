<script lang="ts" setup>
import NavbarComponent from "./components/common/Navbar/NavbarComponent.vue";
</script>

<template>
  <v-app>
    <v-main class="flex column">
      <navbar-component />
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@use "./scss/main.scss";
</style>
