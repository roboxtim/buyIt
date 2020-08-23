import axios from 'axios'
import {Module} from "vuex";
import api from "@/api/utils";

const authModule: Module<any, any> = {
    namespaced: true,
    state: {
        message: '',
        status: '',
        token: api.token,
        user: {}
    },

    getters: {},

    mutations: {
        clear_state(state) {
            state.message = state.status = '';
        },
        auth_request(state) {
            state.status = 'loading';
            state.message = 'Loading';
        },
        auth_success(state: any, payload) {
            state.status = 'success';
            state.token = payload.token;
            state.user = payload.user;
        },
        auth_error(state: any, payload) {
            state.status = 'error';
            state.message = payload.message;
            localStorage.removeItem('token');
        }
    },

    actions: {
        login({commit}, user) {
            commit('clear_state');
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios({
                    url: `${api.url}login`,
                    data: user, method: 'POST'
                })
                    .then(resp => {
                        const token = resp.data.token;
                        const user = resp.data.user;
                        localStorage.setItem('token', token);
                        axios.defaults.headers.common['Authorization'] = token;
                        commit('auth_success', {token: token, user: user});
                        resolve(resp)
                    })
                    .catch((err) => {
                        commit('auth_error', err.response.data);
                        reject(err);
                    })
            })
        }
    }
};

export default authModule;