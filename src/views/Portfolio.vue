<script setup>
import { ref, watchEffect } from "vue";

import router from "@/router";

import { ExclamationIcon } from "@heroicons/vue/outline";

import BaseCard from "@/components/card/BaseCard.vue";
import Logo from "@/components/card/Logo.vue";
import Name from "@/components/card/Name.vue";
import ContactData from "@/components/card/ContactData.vue";

import FancyCursor from "@/components/FancyCursor.vue";

let flip = ref(false);

function flipCard() {
  flip.value = !flip.value;
}

const goTo = (value) => {
  router.push(value);
};

const mobile = window.matchMedia("(max-width: 1024px)");
const tablet = window.matchMedia("(min-width: 1025px)");
const portrait = window.matchMedia("(orientation: portrait)");
const landscape = window.matchMedia("(orientation: landscape)");

watchEffect(() => {
  portrait.onchange = function () {
    console.log("jojojo");
  };
});
</script>

<template>
  <div class="centerXY fill-viewport-100">
    <FancyCursor trigger=".pointer" />

    <div class="pointer">
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
