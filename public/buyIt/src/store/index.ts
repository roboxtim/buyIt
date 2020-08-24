import Vue from "vue";
import Vuex from "vuex";

import auth from "@/store/profile/index";
import purchases from "@/store/purchases/index";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        purchases,
    },
    state: {
        pageTitle : 'Purchases',
        isAppLoading: false
    },
    mutations: {
        changeTitle (state, title) {
            state.pageTitle = title;
        }
    },
    actions: {},
});