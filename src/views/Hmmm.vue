<script setup>

import router from "@/router";

import {
    ExclamationIcon,
} from "@heroicons/vue/outline";

const goTo = (value) => {
    router.push(value)
}

</script>

<template>
    <div @click="goTo('/')" class="fill-viewport-100 centerXY pointer">
        <div class="flex m-1 error">
            <ExclamationIcon class="icono" />
            <mark class="m-1">{{ $route.params.catchAll }}</mark> ?
        </div>
    </div>
</template>