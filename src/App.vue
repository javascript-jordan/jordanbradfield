<script lang="ts" setup>
import NavbarComponent from "./components/common/Navbar/NavbarComponent.vue";
</script>

<template>
  <v-app>
    <navbar-component />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@use "./scss/main.scss";
</style>
