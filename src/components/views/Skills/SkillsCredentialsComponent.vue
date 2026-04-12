<script lang="ts" setup>
import CredentialsComponent from "./Credentials/CredentialsComponent.vue";
</script>
<template>
  <div id="skills" class="p-1">
    <h1>Skills & Credentials</h1>

    <div class="flex align-items-center justify-content-center m-t-2">
      <SkillsComponent />
      <CredentialsComponent />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
