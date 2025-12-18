<script lang="ts" setup></script>
<template>
  <div id="promotional-navbar">
    <v-toolbar
      class="toolbar"
      density="compact"
      :elevation="2"
      title="The professional you need with the skills you want"
    ></v-toolbar>
  </div>
</template>
<style lang="scss" scoped>
#promotional-navbar {
  :deep(.v-toolbar-title) {
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }
}
</style>
