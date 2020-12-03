const state = () => ({
  deviceMobile: null,
  deviceDesktop: null,
  devicePortrait: null,
});

const mutations = {
  handleDeviceMobile(state, e) {
    state.deviceMobile = e.matches;
  },
  handleDeviceDesktop(state, e) {
    state.deviceDesktop = e.matches;
  },
  handleDevicePortrait(state, e) {
    state.devicePortrait = e.matches;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
