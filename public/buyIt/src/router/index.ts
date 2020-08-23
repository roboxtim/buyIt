import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import api from "@/api/utils";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
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
        if(!api.token && to.path !== '/login') {
            next({
                path: '/login'
            })
        } else {
            next();
        }
    }
);

export default router
