<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, version, defineAsyncComponent } from "vue";

import GitHub from "./components/icons/GitHub.vue";
import FancyCursor from "./components/fancy/FancyCursor.vue";
import FancyPreLoader from "./components/fancy/FancyPreLoader.vue";

console.log(version);
</script>

<template>
  <RouterView />
</template>