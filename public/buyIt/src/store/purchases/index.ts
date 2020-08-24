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
        }
    },

    actions: {
        getPurchases({commit}, data) {

            return new Promise((resolve, reject) => {
                axios({
                    url: `${api.url}purchases`,
                    data: data,
                    method: 'GET'
                })
                    .then(resp => {
                        resolve(resp)
                    })
                    .catch((err) => {
                        commit('auth/auth_error', err.response.data);
                        reject(err);
                    })
            })
        },
    }
};

export default purchasesModule;