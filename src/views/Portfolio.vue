<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import FancyCursor from "@/components/FancyCursor.vue";
import BaseCard from "@/components/card/BaseCard.vue";
import Logo from "@/components/card/Logo.vue";
import Name from "@/components/card/Name.vue";
import ContactData from "@/components/card/ContactData.vue";

import { ExclamationIcon } from "@heroicons/vue/outline";

import mediaQueries from "@/composables/mediaQueries";
const { deviceIs, orientationIs } = mediaQueries();

// nav
const router = useRouter();
const goTo = (destination) => {
  router.push(destination);
};

// flip-flop
let flip = ref(false);
function flipCard() {
  flip.value = !flip.value;
}
</script>

<template>
  <div class="centerXY fill-viewport-100">
    <div v-if="deviceIs == `desktop`">
      <FancyCursor trigger=".pointer" />
    </div>
    <div class="pointer" v-if="deviceIs == `mobile`">
      <ExclamationIcon class="icono is-fixed-bottom-r" @click="goTo('/control')" />
    </div>
    <div class="pointer myCard" @mousedown="flipCard">
      <transition name="flip" mode="out-in" appear>
        <BaseCard v-if="!flip" class="myCard-side-A">
          <template #centro>
            <Logo />
          </template>
        </BaseCard>
        <BaseCard v-else class="myCard-side-B">
          <template #arriba>
            <Name />
          </template>
          <template #abajo>
            <ContactData />
          </template>
        </BaseCard>
      </transition>
    </div>
  </div>
</template>
