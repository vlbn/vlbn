<script setup>
import FancyCursor from "@/components/FancyCursor.vue";
import { version } from "vue";
console.log(version);
</script>

<template>
  <div class="fv-100 centerXY">
    <FancyCursor />
    <a class="title is-1" @click="$router.push('/login')">valbuena@duck.com</a>
  </div>
</template>
