import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// import HelloWorld from '@/components/HelloWorld'
import home from '../components/home'

// import about from '../components/About'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about/:id',
      name: 'about',
      component: () => import('../components/about'),
      meta: {
        title: '详情'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login'),
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/main',
      component: () => import('../view/Layout/index'),
      redirect: '/main/home',
      children: [
        {
          path: 'home',
          name: 'home1',
          component: home,
          meta: {
            title: '首页'
          }
        },
        {
          path: 'about/:id',
          name: 'about1',
          component:() => import('../components/about'),
          meta: {
            title: '详情'
          }
        },
        {
          path: 'login',
          name: 'login1',
          component: () => import('../components/login'),
          meta: {
            title: '登陆'
          }
        },
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  Nprogress.start()
  if(to.meta && to.meta.title){
    document.title = to.meta.title
  }
  next()
})
router.afterEach((to, from) => {
  Nprogress.done()
})

export default router
