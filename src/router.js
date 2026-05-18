import { createRouter, createWebHistory } from 'vue-router';

const home = () => import('./shared/presentation/views/home.vue');
const attentions = () => import('./registration/presentation/views/attentions.vue');
const pageNotFound = () => import('./shared/presentation/views/page-not-found.vue');

const routes = [
    { path: '/home',                               name: 'home',       component: home,         meta: { title: 'Home' } },
    { path: '/registration/branch-registerins/new', name: 'attentions', component: attentions,   meta: { title: 'Attentions' } },
    { path: '/',                                   redirect: '/home' },
    { path: '/:pathMatch(.*)*',                    name: 'not-found',  component: pageNotFound, meta: { title: 'Page Not Found' } }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `BBVA Peru | ${to.meta['title'] ?? ''}`;
    next();
});

export default router;
