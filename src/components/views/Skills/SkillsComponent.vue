<script lang="ts" setup>
import type { BadgeMetadata, ICredlyBadgeData } from "@/interfaces";
import TranslationService from "@/services/TranslationService/TranslationService";
import constants from "@/util/constants";
import CredlyBadges from "../../../../public/static/badges.json";

const badges: ICredlyBadgeData = Object.keys(CredlyBadges).map((key: string) => {
  const meta: BadgeMetadata = CredlyBadges[key];
  return {
    ...meta,
    image: `${constants.EXTERNAL_LINKS.S3_BADEGS_PATH}${meta.name.replace(/ /g, "+")}.png`,
  };
});
const skills = TranslationService.currentLanguage.PAGES.SKILLS;

console.log(skills);
</script>
<template>
  <div id="skills" class="p-1">
    <h1>Skills & Credentials</h1>
    <div class="flex align-items-center justify-content-center">
      <div class="skills">
        <v-card class="mx-auto">
          <v-list density="compact">
            <v-list-subheader>Skills Matrix</v-list-subheader>

            <v-list-item v-for="(item, i) in skills" :key="i" :value="item" color="primary">
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title v-text="item.description"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
      <div class="credentials"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
