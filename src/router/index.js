import Vue from 'vue'
import Router from 'vue-router'

import contact from '../components/contact/contact'
import info from '../components/info/info'
import header from '../components/wish'
import foot from '../components/foot'
import address from '../components/address'

import order from '../components/order/order'
Vue.use(Router)

export default new Router({
  routes: [


      {
          path: '/contact',
          name: 'contact',
          component: contact
      },

      {
          path: '/info',
          name: 'info',
          component: info
      },
      {
          path: '/wish',
          name: 'wish',
          component: header
      },
      {
          path: '/foot',
          name: 'foot',
          component: foot
      },

      {
          path: '/address',
          name: 'address',
          component: address
      },

      {
          path: '/order',
          name: 'order',
          component: order
      },


  ]
})
