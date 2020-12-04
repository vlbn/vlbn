import { createStore } from "vuex";

import mediaQueriesState from "./modules/mediaQueriesState";

export default createStore({
  modules: {
    mediaQueriesState,
  },
});
