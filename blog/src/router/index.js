import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/home/home'
import about from '@/pages/about/about'
import article from '@/pages/article/article'
import sjz from '@/pages/shijianzhou/shijianzhou'
import tag from '@/pages/tag/index'
import tagInfo from '@/pages/tag/info'
import category from '@/pages/category/index'
import categoryInfo from '@/pages/category/info'

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
    }, {
        path: '/article/:id',
        name: 'article',
        component: article
    }, {
        path: '/shijianzhou',
        name: 'sjz',
        component: sjz
    }, {
        path: '/tag',
        name: 'tag',
        component: tag
    }, {
        path: '/tag/:id',
        name: 'tagInfo',
        component: tagInfo
    }, {
        path: '/category',
        name: 'category',
        component: category
    }, {
        path: '/category/:id',
        name: 'categoryInfo',
        component: categoryInfo
    }]
})