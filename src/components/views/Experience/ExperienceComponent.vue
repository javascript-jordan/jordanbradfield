<script lang="ts" setup>
import type { ObjectOrString } from "@/interfaces/lib/ILanguagePack";
import TranslationService from "@/services/TranslationService/TranslationService";
console.log(TranslationService.currentLanguage);

const timeline: ObjectOrString = TranslationService.currentLanguage.PAGES.EXPERIENCES.timeline;
</script>
<template>
  <h1>Experience</h1>
  <div id="timeline">
    <v-timeline align="start" side="end">
      <v-timeline-item size="large" v-for="(item, index) in timeline" :key="index">
        <template v-slot:icon>
          <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
        </template>
        <!-- <template v-slot:opposite>
          <span>{{ item.duration }}</span>
        </template> -->
        <v-card class="elevation-1">
          <v-card-title class="text-headline-small"
            >{{ item.title }} {{ item.company }}</v-card-title
          >
          <v-card-text
            ><h3>Employment Decription</h3>
            <br />{{ item.description }}</v-card-text
          >
          <v-timeline side="end" align="start">
            <v-timeline-item size="large" v-for="(project, index) in item.projects" :key="index">
              <template v-slot:icon>
                <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
              </template>
              <!-- <template v-slot:opposite>
                  <span>{{ item.duration }}</span>
                </template> -->
              <v-card class="elevation-1">
                <v-card-title class="text-headline-small"
                  >{{ project.title }} {{ project.company }}</v-card-title
                >
                <v-card-text
                  ><h4>Project Details</h4>
                  <br />{{ project.description }}</v-card-text
                >
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<style lang="scss" scoped></style>
