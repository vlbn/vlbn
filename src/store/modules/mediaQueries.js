const state = () => ({
  deviceMobile: null,
  deviceDesktop: null,
  deviceOrientation: null,
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  handleDeviceMobile(state, e) {
    state.deviceMobile = e.matches;
  },
  handleDeviceDesktop(state, e) {
    state.deviceDesktop = e.matches;
  },
  handleDeviceOrientation(state, e) {
    state.deviceOrientation = e.matches;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
