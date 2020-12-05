<template>
  <div class="box">
    <slot name="top"></slot>
    <slot></slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
};
</script>
