<script setup lang="ts">

// piña🍍
import { storeToRefs } from "pinia";
import { useMainStore } from "../store/useMain";
const main = useMainStore();
const { isLoggedIn, user } = storeToRefs(main);

</script>

<template>
    <div class="fill-viewport-100 centerXY">
        <div class="control centerXY" v-if="isLoggedIn">
            <mark>
                welcome to
                <strong>{{ $route.name }}</strong>
            </mark>
            <img :src="user.avatar" :alt="user.name" :title="user.name" />
            <h1>{{ user.name }}</h1>
            <h2>{{ user.id }}</h2>
            <h3>{{ user.email }}</h3>
        </div>
        <div v-else @click="$router.push('/')" class="pointer">
            <mark>🧙‍♂️ you shall not pass!</mark>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.control {
    img {
        max-width: 5rem;
    }
    mark {
        margin: 1rem;
        padding: 1rem;
    }
    strong {
        font-size: 2rem;
        top: 4px;
        position: relative;
    }
}
</style>
