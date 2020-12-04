const state = () => ({
  deviceIsMobile: null,
  deviceIsDesktop: null,
  deviceIsPortrait: null,
  deviceIsLandscape: null,
});

const mutations = {
  handleDeviceMobile(state, e) {
    state.deviceIsMobile = e.matches;
  },
  handleDeviceDesktop(state, e) {
    state.deviceIsDesktop = e.matches;
  },
  handleDevicePortrait(state, e) {
    state.deviceIsPortrait = e.matches;
  },
  handleDeviceLandscape(state, e) {
    state.deviceIsLandscape = e.matches;
  },  
};

export default {
  namespaced: true,
  state,
  mutations,
};
