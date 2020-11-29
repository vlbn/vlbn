<template>
  <div class="centerXY fill-viewport-100" @mousemove="mousePointerAttach">

    <div ref="mousePointerA" class="mouse-pointer-a"></div>
    <div ref="mousePointerB" class="mouse-pointer-b"></div>

    <div @mousedown="flipCard" class="pointer spot">
      <transition name="fade" mode="out-in">
        <div v-if="!flip">
          <Logo />
        </div>
        <div v-else class="centerXY">
          <Name class="mb-6" />
          <ContactData class="mt-6 pointer" />
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
import Logo from "@/components/card/Logo.vue";
import Name from "@/components/card/Name.vue";
import ContactData from "@/components/card/ContactData.vue";

import { mousePointer } from "@/mixins/mousePointer";

export default {
  mixins: [mousePointer],
  name: "Home",
  components: {
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
  },
};
</script>
