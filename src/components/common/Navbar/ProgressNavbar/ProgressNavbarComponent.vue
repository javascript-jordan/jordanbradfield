<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

const ROUTER_OUTLET_CLASS: string = ".router-view";

const scrollPercent: Ref<number> = ref(0);

const handleRouteCompletion = (element: HTMLElement): void => {
  element.addEventListener("scroll", (event) => {
    const target = event.target as HTMLElement;
    const currentScroll = target.scrollTop;
    const totalSize = target.scrollHeight - target.clientHeight;
    scrollPercent.value = Math.round((currentScroll / totalSize) * 100 * 100) / 100;
  });
};

router.afterEach(() => {
  handleRouteCompletion(document.querySelector(ROUTER_OUTLET_CLASS) as HTMLElement);
});
</script>
<template>
  <div id="progress-bar" class="scrollbar bg-primary" :style="`width: ${scrollPercent}%`"></div>
</template>
<style lang="scss">
#progress-bar {
  height: 5px;
}
</style>
