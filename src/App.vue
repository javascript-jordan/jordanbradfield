<script lang="ts" setup>
import NavbarComponent from "./components/common/Navbar/NavbarComponent.vue";
</script>

<template>
  <v-app>
    <navbar-component />
    <router-view />
  </v-app>
</template>

<style lang="scss">
@use "./scss/main.scss";
</style>
