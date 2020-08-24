import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Purchases from '../components/Purchases.vue'
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

        const path = routes.filter(obj => {
            return obj.path === to.path;
        });

        if(path.length && path[0]) store.commit('changeTitle', path[0].name);

    }
);

export default router
