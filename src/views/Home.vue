<template>
  <div class="centerXY fill-viewport-100" @mousemove="mousePointerAttach">
    
    <div v-show="deviceIsDesktop">
      <div ref="mousePointerA" class="mouse-pointer-a"></div>
      <div ref="mousePointerB" class="mouse-pointer-b"></div>
    </div>

    <div class="pointer" @mousedown="flipCard" ref="theCard">
      <transition name="flip" mode="out-in">
        <base-card
          v-if="!flip"
          class="centerXY myCard-side-A"
          @mousemove="perspectiva"
        >
          <Logo class="logo" />
        </base-card>

        <base-card v-else class="distributeXY myCard-side-B">
          <template v-slot:top><Name /></template>
          <template v-slot:bottom><ContactData /></template>
        </base-card>
      </transition>
    </div>
    
  </div>
</template>

<script>
import { gsap } from "gsap";
import { deviceIs } from "@/mixins/deviceIs";
import { mousePointer } from "@/mixins/mousePointer";

import BaseCard from "@/components/card/BaseCard.vue";

import Logo from "@/components/card/Logo.vue";
import Name from "@/components/card/Name.vue";
import ContactData from "@/components/card/ContactData.vue";

export default {
  mixins: [deviceIs, mousePointer],
  name: "Home",
  components: {
    BaseCard,
    Logo,
    Name,
    ContactData,
  },
  data() {
    return {
      flip: false,
    };
  },
  methods: {
    flipCard() {
      this.flip = !this.flip;
    },
    perspectiva() {
      console.log("perspectiva..");
      gsap.to(this.$refs.theCard, 1, {
        //
      });
    },
  },
  created() {},
};
</script>
