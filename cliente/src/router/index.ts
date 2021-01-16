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
        path: 'materias',
        component: () => import('@/views/appProf/materias.vue')
      },
      {
        path: 'materia',
        component: () => import('@/views/appProf/materia.vue')
      }
    ]
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: 'login',
        component: () => import('@/views/loginReg/login.vue')
      },
      {
        path: 'cargosReg',
        component: () => import('@/views/loginReg/registroCargo.vue')
      },
      {
        path: 'profReg',
        component: () => import('@/views/loginReg/registroProfesor.vue')
      },
      {
        path: 'alumReg',
        component: () => import('@/views/loginReg/registroAlumno.vue')
      },
      {
        path: 'valEmail',
        component: () => import('@/views/loginReg/valEmail.vue')
      },
      {
        path: 'valEmailSi',
        component: () => import('@/views/loginReg/valEmail2Si.vue')
      },
      {
        path: 'valEmailNo',
        component: () => import('@/views/loginReg/valEmail2No.vue')
      },
      {
        path: 'nCont',
        component: () => import('@/views/loginReg/nuContrasena.vue')
      },
      {
        path: 'oCont',
        component: () => import('@/views/loginReg/olContrasena.vue')
      },
      {
        path: 'valCont',
        component: () => import('@/views/loginReg/valContra.vue')
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
        path: 'maletin2',
        component: () => import('@/views/appAlum/maletin2.vue')
      },
      {
        path: 'maletin3',
        component: () => import('@/views/appPrecep/maletin3.vue')
      },
      {
        path: 'tareas',
        component: () => import('@/views/appProf/materias.vue')
      },
      {
        path: 'search',
        component: () => import('@/views/search/search.vue')
      },
      {
        path: 'sBar',
        component: () => import('@/views/search/searchbar.vue')
      },      
      {
        path: 'sProfBas',
        component: () => import('@/views/search/searchProfBas.vue')
      },
      {
        path: 'sProfAv',
        component: () => import('@/views/search/searchProfAvio.vue')
      },
      {
        path: 'sProfAer',
        component: () => import('@/views/search/searchProfAero.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
