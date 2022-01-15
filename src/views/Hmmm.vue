<script setup>

import {
    ExclamationIcon,
} from "@heroicons/vue/outline";

</script>

<template>
    <div @click="$router.push('/')" class="fill-viewport-100 centerXY pointer">
        <div class="flex m-1 error">
            <ExclamationIcon class="icono" />
            <mark class="m-1">{{ $route.params.catchAll }}</mark> ?
        </div>
    </div>
</template>