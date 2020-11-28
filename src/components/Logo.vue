<template>
  <div class="centerXY fill-viewport-100 pointer" @click="showHide">
    <transition name="fade"
      ><figure v-if="logo">
        <img class="p-6" src="../assets/img/logo.svg" alt="valbuena" />
      </figure>
      <div v-else class="columns is-mobile is-centered">
        <div class="column is-half">
          <p class="has-text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            deleniti esse officiis asperiores, architecto eaque at accusamus.
            <strong>Quia aliquam possimus</strong>, quaerat odit minus eligendi enim minima. Amet
            consequatur perferendis aspernatur.
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {
      logo: true,
    };
  },
  methods: {
    showHide() {
      this.logo = !this.logo;
    },
  },
};
</script>
