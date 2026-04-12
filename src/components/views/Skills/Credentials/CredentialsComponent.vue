<script lang="ts" setup>
import type { BadgeMetadata, ICredlyBadgeData } from "@/interfaces";
import constants from "@/util/constants";
import { ref, type Ref } from "vue";
import CredlyBadges from "../../../../../public/static/badges.json";

const badges: BadgeMetadata[] = Object.keys(CredlyBadges)
  .sort((a, b) => (a < b ? -11 : 1))
  .map((key: string) => {
    const meta: BadgeMetadata = (CredlyBadges as ICredlyBadgeData)[key] as BadgeMetadata;
    return {
      ...meta,
      image: `${constants.EXTERNAL_LINKS.S3_BADEGS_PATH}${meta.name.replace(/ /g, "+")}.png`,
      show: true,
    };
  });

const badgesFiltered: Ref<BadgeMetadata[]> = ref<BadgeMetadata[]>(badges);

const searchCriteria: Ref<string> = ref<string>("");

const filterBadges = (): void => {
  const criteria = searchCriteria.value.toLowerCase();
  badgesFiltered.value = badges.filter((badge) => badge.name.toLowerCase().includes(criteria));
};

const filterOrRestBadges = (): void => {
  if (!searchCriteria.value) {
    badgesFiltered.value = badges;
    return;
  }
  filterBadges();
};
</script>
<template>
  <div id="credentials">
    <v-card class="mx-auto p-1">
      <h2>Credentials</h2>
      <v-divider class="m-y-2"></v-divider>
      <v-text-field
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search Certifications"
        variant="solo"
        hide-details
        single-line
        class="m-y-1"
        v-model="searchCriteria"
        @click:append-inner="filterOrRestBadges"
        @keyup="filterOrRestBadges"
      ></v-text-field>
      <div class="badges flex wrap">
        <div
          class="badge flex column align-items-center m-1"
          v-for="(badge, i) in badgesFiltered"
          :key="`badge-${i}`"
        >
          <img :src="badge.image" :alt="badge.name" width="150" />
          <p>{{ badge.name }}</p>
        </div>
      </div>
    </v-card>
  </div>
</template>
<style lang="scss" scoped>
#credentials {
  .badges {
    .badge {
      max-width: 150px;
      p {
        text-align: center;
      }
    }
  }
}
</style>
