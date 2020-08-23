import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter);

const token = localStorage.getItem('token');

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
        if(!token && to.path !== '/login') {
            next({
                path: '/login'
            })
        } else {
            next();
        }
    }
);

export default router
