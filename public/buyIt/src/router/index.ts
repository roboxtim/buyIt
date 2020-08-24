import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Purchases from '../components/Purchases.vue'
import Login from '../components/Login.vue'
import api from "@/api/utils";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Purchases
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = new VueRouter({
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

export default router
