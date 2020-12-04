import { mapState } from "vuex";

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
