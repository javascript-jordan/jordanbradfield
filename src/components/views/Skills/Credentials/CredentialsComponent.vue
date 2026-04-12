<script lang="ts" setup>
import type { BadgeMetadata, ICredlyBadgeData } from "@/interfaces";
import constants from "@/util/constants";
import CredlyBadges from "../../../../../public/static/badges.json";
const badges: ICredlyBadgeData = Object.keys(CredlyBadges)
  .sort((a, b) => (a < b ? -11 : 1))
  .map((key: string) => {
    const meta: BadgeMetadata = CredlyBadges[key];
    return {
      ...meta,
      image: `${constants.EXTERNAL_LINKS.S3_BADEGS_PATH}${meta.name.replace(/ /g, "+")}.png`,
    };
  });
</script>
<template>
  <div id="credentials">
    <v-card class="mx-auto p-1">
      <h2>Credentials</h2>
      <v-divider class="m-y-2"></v-divider>
      <div class="badges flex wrap">
        <div class="badge" v-for="(badge, i) in badges" :key="`badge-${i}`">
          <img :src="badge.image" :alt="badge.name" width="150" />
        </div>
      </div>
    </v-card>
  </div>
</template>
<style lang="scss" scoped></style>
