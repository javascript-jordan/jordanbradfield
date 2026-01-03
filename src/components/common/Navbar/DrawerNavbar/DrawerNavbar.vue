<script lang="ts" setup>
import { ROUTES } from "@/router";
import { computed } from "vue";
import { useRoute } from "vue-router";

const { open } = defineProps(["open"]);
const emit = defineEmits(["toggle-drawer"]);
const route = useRoute();

const navItems = computed(() =>
  ROUTES.map((r) => ({
    title: r.name,
    prependIcon: r.icon,
    active: r.path === route.path,
    to: r.path,
    onClick: closeDrawer,
  })),
);

const closeDrawer = () => emit("toggle-drawer", false);
</script>
<template>
  <div id="drawer-navbar" class="flex" :class="{ open }">
    <div class="left w-80 bg-grey-darken-4">
      <div class="header bg-primary elevation-6">
        <div class="close-button flex justify-flex-end p-r-2 p-y-2 m-b-2">
          <v-icon class="bg-transparent border-0 border-b-0" @click="closeDrawer"
            >mdi-close
          </v-icon>
        </div>
        <div class="pic-info flex p-x-1 align-center p-b-4">
          <div class="pic bg-grey-darken-4 p-1 elevation-2">
            <img src="/img/headshot.JPG" height="100" alt="" />
          </div>
          <div class="info p-x-1">
            <b>Jordan Bradfield</b>
            <br />
            <i>Tech Lead</i>
          </div>
        </div>
      </div>
      <div class="nav-items p-1">
        <v-list :items="navItems" class="py-0" item-value="code" item-props slim></v-list>
      </div>
    </div>
    <div class="right w-30" @click="() => emit('toggle-drawer', false)"></div>
  </div>
</template>
<style lang="scss">
#drawer-navbar {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  &.open {
    .left,
    .right {
      transform: translateX(0%);
    }
  }

  .left,
  .right {
    transition: transform 500ms ease;
    z-index: 2000;
  }
  .left {
    transform: translateX(-100%);

    .pic-info {
      .pic,
      img {
        border-radius: 50%;
      }
      .pic {
        img {
          display: block;
        }
      }
    }
  }
  .right {
    background: rgba(0, 0, 0, 0.7);
    transform: translateX(100%);
  }
}
</style>
