import Vue from 'vue'
import Router from 'vue-router'
import Property from '@/components/Property'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Property',
      component: Property
    }
  ]
})
