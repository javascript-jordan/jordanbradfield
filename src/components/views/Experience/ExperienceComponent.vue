<script lang="ts" setup>
import type { ObjectOrString } from "@/interfaces/lib/ILanguagePack";
import TranslationService from "@/services/TranslationService/TranslationService";
import { ref } from "vue";

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
            <div class="flex align-center p-1">
              <v-avatar class="title-icon" :image="item.logo"></v-avatar>
              <div class="flex column justify-items-center">
                <v-card-title class="text-headline-small" tag="h2"
                  >{{ item.company }} - {{ item.title }}</v-card-title
                >
                <v-card-subtitle>{{ item.duration }}</v-card-subtitle>
              </div>
            </div>
            <v-card-text
              ><h4>Employment Decription</h4>
              <br />{{ item.description }}</v-card-text
            >

            <v-divider opacity=".7" thickness="3" gradient>Assignments</v-divider>

            <v-timeline dense density="compact" align="start" side="end">
              <v-timeline-item
                size="large"
                :icon="project.icon"
                dot-color="primary"
                v-for="(project, index) in item.projects"
                :key="index"
              >
                <v-card class="elevation-1">
                  <v-card-title class="text-headline-small flex justify-content-center"
                    ><v-icon
                      class="icon-title m-r-2"
                      :icon="project.icon"
                      size="large"
                      color="primary"
                    ></v-icon>
                    <div class="title flex column">
                      {{ project.title }}
                      <v-card-subtitle class="p-l-0">{{ project.date }}</v-card-subtitle>
                    </div></v-card-title
                  >

                  <v-card-text class="p-0">
                    <v-expansion-panels class="m-t-1" v-model="openPanels">
                      <v-expansion-panel
                        expanded="true"
                        title="Project Details"
                        :text="project.description"
                        class="m-b-2"
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
  overflow-y: auto;
  word-wrap: break-word;
  word-break: break-word;

  .title-icon {
    display: none;
  }

  :deep(.v-timeline-item__body),
  :deep(.project-title),
  :deep(.v-card-title) {
    min-width: 0px;
    width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: normal;
  }
  :deep(.text-headline-small) {
    .v-icon {
      display: none;
    }
  }
  :deep(.v-timeline-divider) {
    margin-left: 0.5em;
    :deep(.v-icon) {
      /* color: #000000; */
    }
  }
  :deep(.v-slide-group__content) {
    width: 100%;
    flex-wrap: wrap;
  }

  @media #{map.get($display-breakpoints, 'xs')} {
    .title-icon {
      display: flex;
    }

    :deep(.v-timeline-divider) {
      display: none;
    }

    :deep(.v-timeline-item__body) {
      padding-inline-start: 0px;
    }

    :deep(.text-headline-small) {
      .icon-title {
        display: block;
      }
    }
  }
}
</style>
