import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./components/Home.vue'),
      redirect: '/html/course',
      children: [
        {
          path: '/html',
          name: 'Html',
          component: () => import('./views/html/index.vue'),
          redirect: '/html/course',
          children: [
            {
              path: '/html/course',
              name: 'HtmlCourse',
              component: () => import('./views/html/course.vue')
            },
            {
              path: '/html/brief',
              name: 'HtmlBrief',
              component: () => import('./views/html/brief.vue')
            },
            {
              path: '/html/editor',
              name: 'HtmlEditor',
              component: () => import('./views/html/editor.vue')
            },
            {
              path: '/html/basics',
              name: 'HtmlBasics',
              component: () => import('./views/html/basics.vue')
            },
            {
              path: '/html/element',
              name: 'HtmlElement',
              component: () => import('./views/html/element.vue')
            },
            {
              path: '/html/attr',
              name: 'HtmlAttr',
              component: () => import('./views/html/attr.vue')
            },
            {
              path: '/html/title',
              name: 'HtmlTitle',
              component: () => import('./views/html/title.vue')
            }
          ]
        },
        {
          path: '/css',
          name: 'Css',
          component: () => import('./views/css/index.vue'),
          redirect: '/css/course',
          children: [
            {
              path: '/css/course',
              name: 'CssCourse',
              component: () => import('./views/css/course.vue')
            },
            {
              path: '/css/brief',
              name: 'CssBrief',
              component: () => import('./views/css/brief.vue')
            },
            {
              path: '/css/editor',
              name: 'CssEditor',
              component: () => import('./views/css/editor.vue')
            },
            {
              path: '/css/basics',
              name: 'CssBasics',
              component: () => import('./views/css/basics.vue')
            },
            {
              path: '/css/element',
              name: 'CssElement',
              component: () => import('./views/css/element.vue')
            },
            {
              path: '/css/attr',
              name: 'CssAttr',
              component: () => import('./views/css/attr.vue')
            },
            {
              path: '/css/title',
              name: 'CssTitle',
              component: () => import('./views/css/title.vue')
            }
          ]
        }
      ]
    }
  ]
})
