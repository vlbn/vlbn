const state = () => ({
  deviceIsMobile: null,
  deviceIsDesktop: null,
  deviceIsPortrait: null,
  deviceIsLandscape: null,
});

const mutations = {
  setDeviceMobile(state, e) {
    state.deviceIsMobile = e.matches;
  },
  setDeviceDesktop(state, e) {
    state.deviceIsDesktop = e.matches;
  },
  setDevicePortrait(state, e) {
    state.deviceIsPortrait = e.matches;
  },
  setDeviceLandscape(state, e) {
    state.deviceIsLandscape = e.matches;
  },  
};

export default {
  namespaced: true,
  state,
  mutations,
};
