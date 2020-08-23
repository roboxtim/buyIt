import Vue from "vue";
import Vuex from "vuex";

import auth from "@/store/profile/index";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
    },
    state: {
        pageTitle : 'Home',
        isAppLoading: false
    },
    mutations: {
        changeTitle (state, title) {
            state.pageTitle = title;
        }
    },
    actions: {},
});