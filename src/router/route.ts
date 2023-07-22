import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home/index.vue';
import Form from '@/views/Form/index.vue';
import NotFound from '@/views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/form',
        name: 'form',
        component: Form,
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: NotFound,
    },
];

export default routes;
