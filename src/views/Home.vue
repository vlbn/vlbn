<template>
  <div class="centerXY fill-viewport-100 pointer" @click="showHide">
    <transition name="fade" mode="out-in">
      <figure v-if="logo">
        <Logo />
      </figure>
      <div v-else class="columns is-mobile is-centered">
        <div
          class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
        >
          <p class="has-text-justified">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            deleniti esse officiis asperiores, architecto eaque at accusamus.
            <strong>Quia aliquam possimus</strong>, quaerat odit minus eligendi
            enim minima. Amet consequatur perferendis aspernatur.
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  name: "Home",
  components: {
    Logo,
  },
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
