
export const mediaQueries = {
  created() {
    const mediaQuery1 = window.matchMedia("(max-width: 1024px)");
    const mediaQuery2 = window.matchMedia("(min-width: 1025px)");
    const mediaQuery3 = window.matchMedia("(orientation: portrait)");
    const mediaQuery4 = window.matchMedia("(orientation: landscape)");

    mediaQuery1.addListener(this.setDeviceMobile);
    mediaQuery2.addListener(this.setDeviceDesktop);
    mediaQuery3.addListener(this.setDevicePortrait);
    mediaQuery4.addListener(this.setDeviceLandscape);

    this.setDeviceMobile(mediaQuery1);
    this.setDeviceDesktop(mediaQuery2);
    this.setDevicePortrait(mediaQuery3);
    this.setDeviceLandscape(mediaQuery4);
  },
  methods: {
    ...mapMutations("mediaQueriesState", [
      "setDeviceMobile",
      "setDeviceDesktop",
      "setDevicePortrait",
      "setDeviceLandscape",
    ]),
  },
};

export const deviceIs = {
  computed: {
    ...mapState("mediaQueriesState", [
      "deviceIsMobile",
      "deviceIsDesktop",
      "deviceIsPortrait",
      "deviceIsLandscape",
    ]),
  },
};
