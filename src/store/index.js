import { createStore } from "vuex";

export default createStore({
  state: {
    deviceMobile: null,
    deviceDesktop: null,
    deviceOrientation: null,
  },
  mutations: {
    handleDeviceMobile(state, e) {
      state.deviceMobile = e.matches;
    },
    handleDeviceDesktop(state, e) {
      state.deviceDesktop = e.matches;
    },
    handleDeviceOrientation(state, e) {
      state.deviceOrientation = e.matches;
    },
  },
});
