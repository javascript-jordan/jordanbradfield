<script lang="ts" setup>
import TranslationService from "@/services/TranslationService/TranslationService";

const skills = TranslationService.currentLanguage.PAGES.SKILLS.TECHNICAL;
</script>
<template>
  <div id="skills">
    <v-card class="mx-auto p-1">
      <h2>Skills</h2>
      <v-divider class="m-y-2"></v-divider>
      <div class="flex column">
        <div
          class="skill flex justify-content-start m-b-2"
          v-for="(skill, i) in skills"
          :key="`skill-${i}`"
        >
          <div class="icon m-r-2">
            <v-icon color="primary">{{ skill.icon }}</v-icon>
          </div>
          <div class="descriptions flex column">
            <h4>{{ skill.name }}</h4>
            <div class="chips">
              <v-chip
                class="m-r-1 m-t-1"
                :color="tech.premium ? 'orange' : 'default'"
                v-for="(tech, j) in skill.technologies.sort((a, b) => (a.name < b.name ? -1 : 1))"
                :key="`skill-${i}-tech-${j}`"
                :label="tech.name"
                size="small"
              >
                {{ tech.name }}
                <template v-slot:prepend v-if="tech.premium">
                  <v-icon> mdi-star</v-icon>
                </template>
              </v-chip>
            </div>
            <div class="expansion-panel m-t-2">
              <v-expansion-panels>
                <v-expansion-panel title="See More" :text="skill.description"> </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>
<style lang="scss" scoped>
#skills {
  :deep(.v-expansion-panel-title__overlay) {
    opacity: 0.1;
  }
}
</style>
