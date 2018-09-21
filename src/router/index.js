import Vue from 'vue'
import Router from 'vue-router'

import contact from '../components/contact/contact'

import info from '../components/info/info'

import header from '../components/wish'

import foot from '../components/foot'

import address from '../components/address'

import all from '../components/order/all'

import order from '../components/order/order'

import coupon from '../components/coupon'

import height from '../components/height'

import size from '../components/size'

import member from '../components/member'
import add from '../components/add'

import submit from '../components/order/submit'

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

      {
          path: '/all',
          name: 'all',
          component: all
      },

      {
          path: '/coupon',
          name: 'coupon',
          component: coupon
      },

      {
          path: '/height',
          name: 'height',
          component: height
      },

      {
          path: '/size',
          name: 'size',
          component: size
      },

      {
          path: '/submit',
          name: 'submit',
          component: submit
      },

      {
          path: '/member',
          name: 'member',
          component: member
      },
      {
          path: '/add',
          name: 'add',
          component: add
      },

  ]
})
