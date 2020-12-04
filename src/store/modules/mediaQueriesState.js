const state = () => ({
  deviceIsMobile: null,
  deviceIsDesktop: null,
  deviceIsPortrait: null,
  deviceIsLandscape: null,
});

const mutations = {
  setDeviceMobile(state, e) {
    state.deviceIsMobile = e.matches;
    console.log('mobile → ' + e.matches)
  },
  setDeviceDesktop(state, e) {
    state.deviceIsDesktop = e.matches;
    console.log('desktop → ' + e.matches)
  },
  setDevicePortrait(state, e) {
    state.deviceIsPortrait = e.matches;
    console.log('portrait → ' + e.matches)
  },
  setDeviceLandscape(state, e) {
    state.deviceIsLandscape = e.matches;
    console.log('landscape → ' + e.matches)
  },  
};

export default {
  namespaced: true,
  state,
  mutations,
};
