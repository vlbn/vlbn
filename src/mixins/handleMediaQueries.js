import { mapState, mapMutations } from "vuex";

export const handleMediaQueries = {
  created() {
    const mediaQuery1 = window.matchMedia("(max-width: 1024px)");
    const mediaQuery2 = window.matchMedia("(min-width: 1025px)");
    const mediaQuery3 = window.matchMedia("(orientation: portrait)");

    mediaQuery1.addListener(this.handleDeviceMobile);
    mediaQuery2.addListener(this.handleDeviceDesktop);
    mediaQuery3.addListener(this.handleDeviceOrientation);

    this.handleDeviceMobile(mediaQuery1);
    this.handleDeviceDesktop(mediaQuery2);
    this.handleDeviceOrientation(mediaQuery3);
  },
  computed: {
    ...mapState("mediaQueries", [
      "deviceMobile",
      "deviceDesktop",
      "deviceOrientation",
    ]),
  },
  methods: {
    ...mapMutations("mediaQueries", [
      "handleDeviceMobile",
      "handleDeviceDesktop",
      "handleDeviceOrientation",
    ]),
  },
};
