<script setup>
import { ref } from "vue";

let meme = ref("https://picsum.photos/200");

</script>

<template>
    <div @click="$router.push('/')" class="fill-viewport-100 centerXY pointer">
        <p class="meme circle-1" :style="{'background-image': 'url(' + meme + ')'}">
            <mark>{{ $route.params.catchAll }}</mark>
        </p>
    </div>
</template>
