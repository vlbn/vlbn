<script lang="ts">

import { ref, defineComponent } from "vue";

import BaseCard from "@/components/card/BaseCard.vue";
import Logo from "@/components/card/Logo.vue";
import Name from "@/components/card/Name.vue";
import ContactData from "@/components/card/ContactData.vue";

import FancyCursor from "@/components/FancyCursor.vue";

export default defineComponent({
    name: 'portfolio',
    components: {
        [BaseCard.name]: BaseCard,
        Logo,
        Name,
        ContactData,
        FancyCursor,
    },

    setup() {

        let flip = ref(false);

        function flipCard() {
            flip.value = !flip.value;
        };
        return {
            flip,
            flipCard,
            Logo,
            Name,
            ContactData,
            FancyCursor,
        }
    }
})


</script>

<template>
    <div class="centerXY fill-viewport-100">
        <FancyCursor />

        <div class="fancyCursor pointer myCard" ref="theCard" @mousedown="flipCard">
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