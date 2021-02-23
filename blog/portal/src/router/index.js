import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/home/home'
import about from '@/pages/about/about'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: home
    }, {
        path: '/about',
        name: 'about',
        component: about
    }]
})