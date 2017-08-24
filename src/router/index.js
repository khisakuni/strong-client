import Vue from 'vue'
import Router from 'vue-router'
import Workouts from '@/components/Workouts'
import Workout from '@/components/Workout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Workouts',
      component: Workouts
    },
    {
      path: '/workouts/:id',
      name: 'Workout',
      component: Workout,
      props: true
    }
  ]
})
