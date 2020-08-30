import axios from 'axios'
import {Module} from "vuex";
import api from "@/api/utils";

const purchaseModule: Module<any, any> = {
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
        add_purchase : (state, payload) => {
            state.status = 'success';
            state.purchases.push(payload);
        },
        get_purchase : (state, payload) => {
            state.status = 'success';
            state.purchases = payload;
        },
        delete_purchase : (state, data) => {
            state.status = 'success';
            state.purchases.splice(data.key, 1);
        }

    },

    actions: {
        getPurchase({commit}, data) {

            commit('loading');

            console.log(data);

            return new Promise((resolve, reject) => {
                axios({
                    url: `${api.url}purchase`,
                    params: data,
                    method: 'GET'
                })
                    .then(resp => {

                        commit('get_purchase', resp.data.data);

                        resolve(resp)
                    })
                    .catch((err) => {
                        commit('auth/auth_error', err.response, { root: true });
                        reject(err);
                    })
            })
        },
        savePurchase({commit}, data) {

            commit('loading');

            return new Promise((resolve, reject) => {
                axios({
                    url: `${api.url}purchase`,
                    data: data,
                    method: 'POST'
                })
                    .then(resp => {

                        commit('add_purchase', resp.data.data);

                        resolve(resp)
                    })
                    .catch((err) => {
                        commit('auth/auth_error', err.response, { root: true });
                        reject(err);
                    })
            })
        },
        deletePurchase({commit}, data) {

            commit('loading');

            return new Promise((resolve, reject) => {
                axios({
                    url: `${api.url}purchase`,
                    data: data,
                    method: 'DELETE'
                })
                    .then(resp => {

                        commit('delete_purchase', data);

                        resolve(resp)
                    })
                    .catch((err) => {
                        commit('auth/auth_error', err.response, { root: true });
                        reject(err);
                    })
            })
        },
        updatePurchase({commit}, data) {

            return new Promise((resolve, reject) => {
                axios({
                    url: `${api.url}purchase`,
                    data: data,
                    method: 'PUT'
                })
                    .then(resp => {
                        resolve(resp)
                    })
                    .catch((err) => {
                        commit('auth/auth_error', err.response, { root: true });
                        reject(err);
                    })
            })
        },
    }
};

export default purchaseModule;