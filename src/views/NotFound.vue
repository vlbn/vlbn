<template>
  <div
    class="centerXY fill-viewport-100 pointer"
    ref="notFound"
    @click="fadeTo('/', this.$refs.notFound)"
  >
    <div class="has-text-centered">
      <h1 class="is-size-1"><strong>404</strong></h1>
      <p class="my-3">nothing here, zero, nada..</p>
      <h2>👈</h2>
    </div>
  </div>
</template>

<script>
import { reusables } from "@/mixins/reusables";

export default {
  mixins: [reusables],
  name: "NotFound",
};
</script>
