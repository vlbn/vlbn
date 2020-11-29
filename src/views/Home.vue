<template>
  <div class="centerXY fill-viewport-100 pointer" @click="flipCard">
    <transition name="fade" mode="out-in">
      <div v-if="!flip">
        <Logo />
      </div>
      <div v-else class="centerXY">
        <Name class="mb-6" />
        <ContactData class="mt-6" />
      </div>
    </transition>
  </div>
</template>

<script>
import Logo from "@/components/card/Logo.vue";
import Name from "@/components/card/Name.vue";
import ContactData from "@/components/card/ContactData.vue";

export default {
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
