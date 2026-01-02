<script lang="ts" setup>
const { open } = defineProps(["open"]);
const emit = defineEmits(["toggle-drawer"]);
</script>
<template>
  <div id="drawer-navbar" class="flex" :class="{ open }">
    <div class="left w-70 bg-grey-darken-4"></div>
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
  }
  .right {
    background: rgba(0, 0, 0, 0.7);
    transform: translateX(100%);
  }
}
</style>
