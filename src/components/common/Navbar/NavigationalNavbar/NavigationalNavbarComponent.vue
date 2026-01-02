<script lang="ts" setup>
import vuetify from "@/plugins/vuetify";
import router, { ROUTES } from "@/router";
import { computed, reactive, ref, type ComputedRef } from "vue";
import {
  useRoute,
  type RouteLocationNormalizedLoadedGeneric,
  type RouteRecordNameGeneric,
} from "vue-router";
import { useDisplay } from "vuetify";

const emit = defineEmits(["toggle-drawer"]);

const activeRoute: RouteLocationNormalizedLoadedGeneric = useRoute();
const display = useDisplay();

const headerTitle: ComputedRef<RouteRecordNameGeneric | string> = computed(() => {
  return display.smAndDown.value ? activeRoute.name : "Jordan Bradfield";
});
const menuItems = [
  {
    title: "LinkedIn",
    prependIcon: "mdi-linkedin",
    href: "https://www.linkedin.com/in/jordan-bradfield-9333a1119",
    target: "_blank",
  },
  { type: "divider" },
  {
    title: "Github",
    prependIcon: "mdi-git",
    href: "https://github.com/javascript-jordan/jordanbradfield",
    target: "_blank",
  },
  { type: "divider" },
  { title: "Resume", prependIcon: "mdi-file-download", onClick: () => console.log("Download") },
];
</script>
<template>
  <v-app-bar id="navigation-navbar" class="p-x-1" color="primary" :elevation="10">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="() => emit('toggle-drawer', true)"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title
      ><h4 class="m-l-2" :class="{ 'text-center ml-0': vuetify.display.smAndDown.value }">
        {{ headerTitle }}
      </h4></v-app-bar-title
    >
    <v-tabs class="links hidden-sm-and-down">
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
      <v-btn id="menu-activator" icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-menu activator="#menu-activator">
        <v-list
          :items="menuItems"
          class="py-0"
          density="compact"
          item-value="code"
          item-props
          slim
        ></v-list>
      </v-menu>
      <div class="resume d-none"><h1>hello</h1></div>
    </template>
  </v-app-bar>
</template>
<style lang="scss">
@import "@/scss/spacing.scss";
#navigation-navbar {
  padding-inline-end: $unit;
  position: relative !important;

  .v-toolbar__content > .v-toolbar-title {
    margin-inline-start: 0px;
  }
}
</style>
