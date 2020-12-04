<template>

  <div v-show="deviceIsPortrait && !deviceIsDesktop" class="is-fixed-top-r">📲</div>

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
import { deviceIs } from "@/mixins/deviceIs";
import { fadeTo } from "@/mixins/reusableFunctions";

export default {
  mixins: [deviceIs, fadeTo],
  name: "NotFound",
};
</script>
