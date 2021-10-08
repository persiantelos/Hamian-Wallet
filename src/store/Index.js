import vue from "vue";
import vuex from "vuex";
import state from "./state.js";
import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

vue.use(vuex);

const store = () => {
    return new vuex.Store({
        state,
        actions,
        getters,
        mutations
    })
};
export default store;