import vue from "vue";
import vuex from "vuex";
import State from "./state";
import Actions from "./Actions";
import Getters from "./Getters";
import Mutations from "./Mutations";

vue.use(vuex);

const store = () => {
    return new vuex.Store({
        State,
        Actions,
        Getters,
        Mutations
    })
};
export default store;