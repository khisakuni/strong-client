import Vue from 'vue'
import Router from 'vue-router'
import Workouts from '@/components/Workouts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Workouts',
      component: Workouts
    }
  ]
})
