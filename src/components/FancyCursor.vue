<template>
    <div class="cursor-a" :class="cursorA"></div>
    <div class="cursor-b" :class="cursorB"></div>
    <canvas class="canvas"></canvas>
</template>

<script setup lang="ts">

import { ref, onMounted } from "vue";

import { gsap } from "gsap";

interface props {
    theme?: string;
    trigger?: string;
}

const props = withDefaults(defineProps<props>(), {
    theme: "vlbn",
    trigger: ".pointer",
});

const cursorA = ref();
const cursorB = ref();

if (props.theme == "vlbn") {
    cursorA.value = "blue"
    cursorB.value = "green"
}

let fancyTl = gsap.timeline({ paused: true });

const cursorIn = () => fancyTl.play();
const cursorOut = () => fancyTl.reverse();

const cursorAttach = ($event: { clientX: any; clientY: any; }) => {
    gsap.set(".cursor-a", {
        x: $event.clientX,
        y: $event.clientY,
    });
    gsap.set(".cursor-b", {
        x: $event.clientX,
        y: $event.clientY,
    });
    gsap.to(".cursor-a", {
        duration: 0.5,
        autoAlpha: 1,
        x: $event.clientX,
        y: $event.clientY,
    });
    gsap.to(".cursor-b", {
        duration: 0.9,
        autoAlpha: 1,
        x: $event.clientX,
        y: $event.clientY,
    });
}

window.addEventListener("mousemove", cursorAttach);

onMounted(() => {

    let iTrigger = document.querySelectorAll(props.trigger);

    for (let i = 0; i < iTrigger.length; i++) {
        iTrigger[i].addEventListener("mouseover", cursorIn);
        iTrigger[i].addEventListener("mouseout", cursorOut);
        iTrigger[i].addEventListener("click", cursorOut);
        iTrigger[i].addEventListener("mousedown", cursorOut);
    }

    gsap.set(iTrigger, {
        zIndex: "1",
        position: "relative"
    });

    fancyTl = gsap
        .timeline()
        .to(".cursor-a", {
            duration: 0.1,
            scale: 0,
        })
        .to(".cursor-b", {
            duration: 0,
            zIndex: "2",
        }, ">")
        .to(".cursor-b", {
            scale: 1.9,
            duration: 0.4,
            ease: "bounce",
        }, ">")
        .reverse();

})

</script>

<style lang="scss">
.canvas {
    width: 100%;
    height: 100%;
    position: fixed;
}

// fancy colors
$green: #42b983;
$blue: #273849;

.green {
    background-color: $green;
}
.blue {
    background-color: $blue;
}

// cursor pointer
.cursor {
    &-a {
        opacity: 0;
        position: fixed;
        width: 10px;
        height: 10px;
        left: -5px;
        top: -5px;
        border-radius: 100%;
        z-index: 2;
        pointer-events: none;
    }
    &-b {
        opacity: 0;
        position: fixed;
        width: 30px;
        height: 30px;
        left: -15px;
        top: -15px;
        border-radius: 100%;
        z-index: 1;
        pointer-events: none;
        mix-blend-mode: multiply;
    }
}
</style>