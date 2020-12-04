<template>
  <router-view />
</template>

<script>
import { mediaQueries } from "@/mixins/mediaQueries";

export default {
  mixins: [mediaQueries],
};
</script>
