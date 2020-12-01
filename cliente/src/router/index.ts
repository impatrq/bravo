import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/prof/',
    component: Tabs,
    children: [
      {
        path: '/prof/',
        redirect: 'home'
      },
      {
        path: 'home',
        component: () => import('@/views/appProf/home.vue')
      },
      {
        path: 'maletin',
        component: () => import('@/views/appProf/maletin.vue')
      }
    ]
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'login'
      },
      {
        path: 'login',
        component: () => import('@/views/login.vue')
      },
      {
        path: 'cargosReg',
        component: () => import('@/views/registroCargo.vue')
      },
      {
        path: 'precReg',
        component: () => import('@/views/registroPreceptor.vue')
      },
      {
        path: 'profReg',
        component: () => import('@/views/registroProfesor.vue')
      },
      {
        path: 'panolReg',
        component: () => import('@/views/registroPanol.vue')
      },
      {
        path: 'alumReg',
        component: () => import('@/views/registroAlumno.vue')
      },
      {
        path: 'valEmail',
        component: () => import('@/views/valEmail.vue')
      },
      {
        path: 'valEmailSi',
        component: () => import('@/views/valEmail2Si.vue')
      },
      {
        path: 'valEmailNo',
        component: () => import('@/views/valEmail2No.vue')
      },
      {
        path: 'nCont',
        component: () => import('@/views/nuContrasena.vue')
      },
      {
        path: 'oCont',
        component: () => import('@/views/olContrasena.vue')
      },
      {
        path: 'valCont',
        component: () => import('@/views/valContra.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/appProf/home.vue')
      },
      {
        path: 'home2',
        component: () => import('@/views/appAlum/home2.vue')
      },
      {
        path: 'maletin',
        component: () => import('@/views/appProf/maletin.vue')
      },
      {
        path: 'maletin2',
        component: () => import('@/views/appAlum/maletin2.vue')
      },
      {
        path: 'maletin3',
        component: () => import('@/views/appPrecep/maletin3.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
