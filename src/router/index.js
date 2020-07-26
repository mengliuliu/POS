import Vue from 'vue'
import VueRouter from 'vue-router'
import Pos from '../components/page/Pos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pos',
    component: Pos
  }
]

const router = new VueRouter({
  routes
})

export default router
