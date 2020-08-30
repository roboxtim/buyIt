import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Purchases from '../components/Purchases.vue'
import Purchase from '../components/Purchase.vue'
import Login from '../components/Login.vue'
import store from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Purchases',
        component: Purchases
    },
    {
        path: '/list/:list_id',
        meta: {
            path : 'list/'
        },
        name: 'List purchases',
        component: Purchase
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach(
    (to, from, next) => {

        if(!localStorage.getItem('token') && to.path !== '/login') {
            next({
                path: '/login'
            })
        } else {
            next();
        }


    }
);

router.afterEach(
    (to) => {

        const path: any = (to['matched'].length) ? to['matched'][0] : [];

        if(path) store.commit('changeTitle', path.name);

    }
);

export default router
