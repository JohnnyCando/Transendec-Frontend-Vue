import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/AboutView.vue'),
  },
  {
    path: '/adminpanel',
    name: 'adminPanel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/AdminPanel.vue'),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'dashboard',
        name: 'Dashboard',
        component: import('../views/admin/Dashboard.vue'),
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'service',
        children: [
          {
            // UserProfile will be rendered inside User's <router-view>
            // when /user/:id/profile is matched
            path: 'new',
            component: import('../views/admin/service/New.vue'),
          },
          {
            // UserProfile will be rendered inside User's <router-view>
            // when /user/:id/profile is matched
            path: 'list',
            component: import('../views/admin/service/List.vue'),
          },
        ],
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'contact',
        children: [
          {
            // UserProfile will be rendered inside User's <router-view>
            // when /user/:id/profile is matched
            name: 'contactList',
            path: 'list',
            component: import('../views/admin/contact/list/List.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/services-admin',
    name: 'servicesAdmin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/AdminPanel.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/ContactView.vue'),
  },
  {
    path: '/service',
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: ':id',
        component: import('../views/Service.vue'),
      },
    ],
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/Articles.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
