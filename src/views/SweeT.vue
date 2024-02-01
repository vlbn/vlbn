<script setup>
import { inject, ref } from "vue";
const stores = inject("stores");
const lloret = ref(stores.state.lloret);
</script>

<template>
  <div>{{ lloret }}</div>
</template>
