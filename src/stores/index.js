import { reactive, readonly } from "vue";

const state = reactive({
  random: {
    titulo: "un bonito título",
    desc: "una bonita descripción",
    media: "https://picsum.photos/200/300",
    link: "https://github.com/vlbn/",
  },
});

export default {
  state: readonly(state),
};
