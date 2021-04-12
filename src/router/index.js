import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: { requireAuth: true },
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue'),
    },

    {
        path: '/signup',
        name: 'signup',
        component: () => import('../views/Signup.vue'),
    },

    {
        path: '/network-issue',
        name: 'network-issue',
        component: () => import('../views/NetworkIssue.vue'),
        props: true,
    },

    {
        path: '/404',
        name: 'not-found',
        component: () => import('../views/NotFound.vue'),
        props: true,
    },

    {
        path: '*',
        redirect: { name: 'not-found' },
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((routeTo, routeFrom, next) => {
    const loggedIn = localStorage.getItem('user');
    if (!loggedIn && routeTo.matched.some(record => record.meta.requireAuth)) {
        next({ name: 'login' });
    }

    next();
});

export default router;
