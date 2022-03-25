<script setup>
import { watch } from "vue";
import { useRouter } from "vue-router";

import Kanye from "@/components/apis/Kanye.vue";

import { ArrowNarrowLeftIcon } from "@heroicons/vue/outline";

// piña🍍
import { storeToRefs } from "pinia";
import { theUser } from "@/stores/theUser";
const tU = theUser();
const { isLoggedIn, user } = storeToRefs(tU);

// nav
const router = useRouter();
const goTo = (value) => {
  router.push(value);
};

// i see you..
watch(isLoggedIn, () => {
  console.log("logged in: " + isLoggedIn.value);
});
</script>

<template>
  <div class="fill-viewport-100 centerXY">
  
    <div class="pointer">
      <ArrowNarrowLeftIcon class="icono is-fixed-top-left" @click="goTo('/')" />
    </div>

    <Transition name="flip" mode="out-in" appear>

      <div class="control centerXY" v-if="isLoggedIn">
        <mark>
          welcome to
          <strong>{{ $route.fullPath }}</strong>
        </mark>
        <div
          class="circle-170 shadow-1"
          :style="{ 'background-image': 'url(' + user.avatar + ')' }"
        ></div>
        <h1>{{ user.name }}</h1>
        <h2>{{ user.id }}</h2>
        <h3>{{ user.email }}</h3>
        <hr />
        <button class="button-52" role="button" @click="tU.setIsLoggedIn(false)">OFF</button>
      </div>

      <div v-else class="m-3 p-3">
        <div class="pb-3">🧙‍♂️</div>
        <div class="pb-3">
          <mark class="mr-1">you shall not pass!</mark>
        </div>
        <div class="mb-0 pb-0">
          <button class="button-33" role="button" @click="tU.setIsLoggedIn(true)">ON</button>
        </div>
        <h1 class="px-1">
          <Kanye />
        </h1>
      </div>

    </Transition>

  </div>
</template>

<style lang="scss" scoped>

.control {
  img {
    max-width: 5rem;
  }
  strong {
    font-size: 2rem;
    top: 4px;
    position: relative;
  }
}

/* buttons */
.button-33 {
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-33:hover {
  box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
    rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
    rgba(44, 187, 99, 0.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}

.button-52 {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-52:after {
  content: "";
  background-color: #ffe54c;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.button-52:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
  .button-52 {
    padding: 13px 50px 13px;
  }
}

</style>
