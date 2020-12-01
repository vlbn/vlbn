import { createStore } from "vuex";

import mediaQueries from "./modules/mediaQueries";

export default createStore({
  modules: {
    mediaQueries,
  },
});
