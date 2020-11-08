import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1'
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
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
