<script lang="ts" setup>
import NavbarComponent from "./components/common/Navbar/NavbarComponent.vue";
</script>

<template>
  <v-app>
    <navbar-component />
    <div class="router-view">
      <router-view />
    </div>
  </v-app>
</template>

<style lang="scss">
@use "./scss/main.scss";
.v-application__wrap {
  overflow: hidden !important;
}
.router-view {
  overflow: auto;
}
</style>
