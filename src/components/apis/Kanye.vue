<script setup>

import { ref } from "vue";

import KanyeAPI from "@/services/KanyeAPI";

const quote = ref('');

const loadQuote = async () => {
    try {
        const response = await KanyeAPI.getQuote()
        quote.value = response.data.quote
    } catch (err) {
        console.log(err)
    }
}

loadQuote()

</script>

<template>{{ quote }}</template>