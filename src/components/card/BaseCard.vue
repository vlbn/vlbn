<template>
  <div>
    <slot name="arriba"></slot>
    <slot name="centro"></slot>
    <slot name="abajo"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'BaseCard',
})
</script>