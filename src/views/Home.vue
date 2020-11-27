<template>

  <HelloWorld msg="help me world 🤷" />

  <button class="my-4 button is-link" @click="revelarOcultar">{{ buttonText }}</button>

  <transition name="fade"
    ><p v-if="!lorem">
      Lorem ipsum dolor sit amet
      <strong>consectetur adipisicing elit.</strong> Qui nam accusamus vero odio
      quibusdam libero ex facilis molestias nulla doloribus iste, impedit sunt
      placeat eos assumenda? Laboriosam adipisci dolore maiores?
    </p></transition
  >
  
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      lorem: true,
    };
  },
  computed: {
    buttonText() {
      return this.lorem ? "Lorem" : "Ipsum";
    },
  },
  methods: {
    revelarOcultar() {
      this.lorem = !this.lorem;
    },
  },
};
</script>
