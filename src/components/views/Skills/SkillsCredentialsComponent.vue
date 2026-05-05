<script lang="ts" setup>
import CredentialsComponent from "./Credentials/CredentialsComponent.vue";
import SkillsComponent from "./Skills/SkillsComponent.vue";
</script>
<template>
  <div id="skills-credentials" class="p-1">
    <h1>Skills & Credentials</h1>

    <div class="flex column align-items-center justify-content-center m-t-2">
      <SkillsComponent />
      <span class="m-1"></span>
      <CredentialsComponent />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media (min-width: 900px) {
  #skills-credentials {
    :deep(.skills-card) {
      width: 450px;
    }
  }
}
@media (min-width: 900px) {
  #skills-credentials {
    .flex {
      flex-direction: row;
    }
  }
}
</style>
