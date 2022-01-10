<script setup>

// piña🍍
import { storeToRefs } from "pinia";
import { useMainStore } from "../store/useMain";
const main = useMainStore();
const { isLoggedIn, user } = storeToRefs(main);

</script>

<template>
    <div class="fill-viewport-100 centerXY">
    
        <Transition name="flip" mode="out-in" appear>
            <div class="control centerXY" v-if="isLoggedIn">
                <mark>
                    welcome to
                    <strong>{{ $route.name }}</strong>
                </mark>
                <div class="circle-1" :style="{'background-image': 'url(' + user.avatar + ')'}" ></div>
                <h1>{{ user.name }}</h1>
                <h2>{{ user.id }}</h2>
                <h3>{{ user.email }}</h3>
                <hr />
                <button class="button-52" role="button" @click="main.setIsLoggedIn(false)">OFF</button>
            </div>
            <div v-else class="pointer">
                <mark @click="$router.push('/')">🧙‍♂️ you shall not pass!</mark>
                <button class="button-33" role="button" @click="main.setIsLoggedIn(true)">ON</button>
            </div>
        </Transition>

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
    font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,
        sans-serif;
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
