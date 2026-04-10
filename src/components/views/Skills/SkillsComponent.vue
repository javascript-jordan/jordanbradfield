<script lang="ts" setup>
import type { BadgeMetadata, ICredlyBadgeData } from "@/interfaces";
import constants from "@/util/constants";
import CredlyBadges from "../../../../public/static/badges.json";

const badges: ICredlyBadgeData = Object.keys(CredlyBadges).map((key: string) => {
  const meta: BadgeMetadata = CredlyBadges[key];
  return {
    ...meta,
    image: `${constants.EXTERNAL_LINKS.S3_BADEGS_PATH}${meta.name.replace(/ /g, "+")}.png`,
  };
});

console.log(badges);

console.log(badges);
</script>
<template>
  <h1>Skills</h1>
</template>
<style lang="scss" scoped></style>
