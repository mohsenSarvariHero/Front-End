import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Pages from '../components/Pages.vue'
// import Card from '@/components/dropdown/Card.vue'
// import Checkout from '@/components/dropdown/Checkout.vue'
// import Whishlist from '../components/dropdown/Whishlist.vue'
// import Portfolio from '../components/dropdown/Portfolio.vue'
// import ShopDetails from '../components/dropdown/ShopDetails.vue'
// import BlogDetails from '../components/dropdown/BlogDetails.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/services',
        name: 'Services',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Services.vue')
    },
    {
        path: '/shop',
        name: 'Shop',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Shop.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Blog.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contact.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Search.vue')
    },
    {
        path: '/card',
        name: 'Card',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Card.vue')
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Checkout.vue')
    },
    {
        path: '/whishlist',
        name: 'Whishlist',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Whishlist.vue')
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Portfolio.vue')
    },
    {
        path: '/shopdetails',
        name: 'ShopDetails',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ShopDetails.vue')
    },
    {
        path: '/blogdetails',
        name: 'BlogDetails',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/BlogDetails.vue')
    },
    {
        path: '/extra',
        name: 'Extra',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Extra.vue')
    },
    // {
    //     path: '/pages',
    //     name: 'Pages',
    //     component: Pages
    // },
    // {
    //     path: '/pages/card',
    //     name: 'Card',
    //     component: Card
    // },
    // {
    //     path: '/pages/checkout',
    //     name: 'Chechout',
    //     component: Checkout
    // },
    // {
    //     path: '/pages/whishlist',
    //     name: 'Whishlist',
    //     component: Whishlist
    // },
    // {
    //     path: '/pages/portfolio',
    //     name: 'Portfolio',
    //     component: Portfolio
    // },
    // {
    //     path: '/pages/shopdetails',
    //     name: 'ShopDetails',
    //     component: ShopDetails
    // },
    // {
    //     path: '/pages/blogdetails',
    //     name: 'BlogDetails',
    //     component: BlogDetails
    // },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router