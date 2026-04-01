<script lang="ts" setup>
import type { ObjectOrString } from "@/interfaces/lib/ILanguagePack";
import TranslationService from "@/services/TranslationService/TranslationService";
import { ref } from "vue";
console.log(TranslationService.currentLanguage);

const timeline: ObjectOrString = TranslationService.currentLanguage.PAGES.EXPERIENCES.timeline;

const orderSkills = (skills: string[]) => {
  return skills.sort((a, b) => (a > b ? 1 : -1));
};
const openPanels = ref([0]);
</script>
<template>
  <div id="experience" class="p-y-1 p-x-2">
    <h1>Experience</h1>
    <div id="timeline" class="p-x-2">
      <v-timeline density="compact" align="start" side="end">
        <v-timeline-item size="small" v-for="(item, index) in timeline" :key="index">
          <template v-slot:icon>
            <v-avatar :image="item.logo"></v-avatar>
          </template>
          <v-card class="elevation-1">
            <v-card-title class="text-headline-small" tag="h2"
              >{{ item.company }} - {{ item.title }}</v-card-title
            >
            <v-card-subtitle>{{ item.duration }}</v-card-subtitle>

            <v-card-text
              ><h4>Employment Decription</h4>
              <br />{{ item.description }}</v-card-text
            >
            <v-timeline dense density="compact" align="start" side="end">
              <v-timeline-item size="large" v-for="(project, index) in item.projects" :key="index">
                <template v-slot:icon>
                  <v-avatar :image="project.logo"></v-avatar>
                </template>
                <v-card class="elevation-1">
                  <v-card-title class="text-headline-small flex justify-content-center"
                    ><img class="m-r-1" height="35" width="35" :src="project.logo" />
                    <p class="project-title">{{ project.title }}</p></v-card-title
                  >
                  <v-card-subtitle>{{ project.date }}</v-card-subtitle>
                  <v-card-text>
                    <v-expansion-panels class="m-t-1" v-model="openPanels">
                      <v-expansion-panel
                        expanded="true"
                        title="Project Details"
                        :text="project.description"
                      >
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-card-text>
                  <h4 class="m-l-2 m-b-1">Skills Used:</h4>
                  <v-chip-group class="m-b-1 p-l-1">
                    <v-chip v-for="(skill, i) in orderSkills(project.skills)" :key="i">{{
                      skill
                    }}</v-chip>
                  </v-chip-group>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "sass:map";
@use "vuetify/lib/styles/settings/variables" as *;

#timeline {
  overflow-x: hidden;
  word-wrap: break-word;
  word-break: break-word;

  :deep {
    .v-timeline-item__body,
    .project-title,
    .v-card-title {
      min-width: 0px;
      width: 100%;
      overflow-wrap: break-word;
      word-wrap: break-word;
      white-space: normal;
    }
    .text-headline-small {
      img {
        display: none;
        border-radius: 50%;
      }
    }
    .v-slide-group__content {
      width: 100%;
      flex-wrap: wrap;
    }
  }

  @media #{map.get($display-breakpoints, 'xs')} {
    :deep {
      .v-timeline-divider {
        display: none;
      }

      .v-timeline-item__body {
        padding-inline-start: 0px;
      }

      .text-headline-small {
        img {
          border-radius: 50%;
          display: inline-block;
        }
      }
    }
  }
}
</style>
