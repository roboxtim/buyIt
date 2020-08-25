import axios from 'axios'
import {Module} from "vuex";
import api from "@/api/utils";

const purchasesModule: Module<any, any> = {
    namespaced: true,
    state: {
        status : '',
        purchases: [],
        page: 1
    },

    getters: {},

    mutations: {
        loading : state => {
            state.status = 'loading'
        },
        add_purchases : (state, payload) => {
            state.status = 'success';
            state.purchases.push(payload);
        },
        get_purchases : (state, payload) => {
            state.status = 'success';
            state.purchases = payload;
        },

    },

    actions: {
        getPurchases({commit}, data) {

            commit('loading');

            return new Promise((resolve, reject) => {
                axios({
                    url: `${api.url}purchases`,
                    data: data,
                    method: 'GET'
                })
                    .then(resp => {

                        commit('get_purchases', resp.data.data);

                        resolve(resp)
                    })
                    .catch((err) => {
                        //commit('auth/auth_error', err.response.data, { root: true });
                        reject(err);
                    })
            })
        },
        savePurchases({commit}, data) {

            commit('loading');

            return new Promise((resolve, reject) => {
                axios({
                    url: `${api.url}purchases`,
                    data: data,
                    method: 'POST'
                })
                    .then(resp => {

                        commit('add_purchases', resp.data.data);

                        resolve(resp)
                    })
                    .catch((err) => {
                        commit('auth/auth_error', err.response.data, { root: true });
                        reject(err);
                    })
            })
        },
    }
};

export default purchasesModule;