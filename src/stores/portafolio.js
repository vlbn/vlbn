import { defineStore } from "pinia";

export const usePortafolioStore = defineStore({
  id: "portafolio",
  state: () => ({
    portafolio: {},
  }),
});
