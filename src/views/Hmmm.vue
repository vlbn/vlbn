<script setup lang="ts">
import { ref } from "vue";

let meme = ref("https://firebasestorage.googleapis.com/v0/b/valbuena1.appspot.com/o/b828d093-947e-45ac-a425-0988beb0861d.webp?alt=media&token=45fc9a03-7ebe-4f8e-a4b5-c4640dc598b7");

</script>

<template>
    <div @click="$router.push('/')" class="fill-viewport-100 centerXY pointer">
        <p class="meme">
            <img :src="meme" />
            <mark>{{ $route.params.catchAll }}</mark>
        </p>
    </div>
</template>
