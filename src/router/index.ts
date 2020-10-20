import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TermsOfService from '../views/TermsOfService.vue'
import Safety from '../views/Safety.vue'
import CommunityGuideline from '../views/CommunityGuideline.vue'
import Privacy from '../views/Privacy.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: '',
    component: () => import('../views/index.vue')
  },
  {
    path: '/policy/termsofservice',
    name: 'termsofservice',
    component: TermsOfService
  },
  {
    path: '/policy/safety',
    name: 'safety',
    component: Safety
  },
  {
    path: '/policy/community_guideline',
    name: 'communityguideline',
    component: CommunityGuideline
  },
  {
    path: '/policy/privacy',
    name: 'privacy',
    component: Privacy
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
