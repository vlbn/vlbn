<template>
  <div class="centerXY fill-viewport-100">
    <transition name="fade"
      ><figure v-if="logo">
        <img src="../assets/img/logo.svg" alt="valbuena" /></figure
    ></transition>
  </div>
</template>

<script>
export default {
  name: "Logo",
  data(){
    return {
      logo: false,
    }
  },
  mounted() {
    this.logo = true;
  }
};
</script>
