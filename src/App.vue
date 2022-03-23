<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

watch(route, () => {
  console.log(route.fullPath);
});
</script>
