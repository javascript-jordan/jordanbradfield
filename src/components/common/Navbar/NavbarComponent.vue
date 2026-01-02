<script lang="ts" setup>
import { ref } from "vue";
import DrawerNavbar from "./DrawerNavbar/DrawerNavbar.vue";
import NavigationalNavbarComponent from "./NavigationalNavbar/NavigationalNavbarComponent.vue";
import PromotionalNavbarComponent from "./PromotionalNavbar/PromotionalNavbarComponent.vue";

const drawerOpen = ref(false);

const toggleDrawer = (toggle: boolean) => {
  drawerOpen.value = toggle;
};
</script>
<template>
  <div id="navbar-component">
    <promotional-navbar-component />
    <navigational-navbar-component @toggle-drawer="toggleDrawer" />
    <drawer-navbar @toggle-drawer="toggleDrawer" :open="drawerOpen" />
  </div>
</template>
<style lang="scss" scoped></style>
