import Vue from 'vue'
import Router from 'vue-router'
import Test from "@/components/pages/test"
import Home from "@/components/pages/home/Home"
import MyHome from "@/components/pages/myhome/MyHome"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test
    },{
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/myhome',
      name: 'myhome',
      component: MyHome
    }
  ]
})
