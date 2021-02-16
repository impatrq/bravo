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
        component: () => import('@/views/appProf/materiasprof/materias.vue')
      },
      {
        path: 'materia',
        component: () => import('@/views/appProf/materiasprof/materia.vue')
      },
      {
        path: 'pfprof',
        component: () => import('@/views/appProf/materiasprof/perfilprof.vue')
      },
      {
        path: 'ncom',
        component: () => import('@/views/appProf/materiasprof/añadir/nuevocom.vue')
      },
      {
        path: 'ntp',
        component: () => import('@/views/appProf/materiasprof/añadir/nuevotp.vue')
      },
      {
        path: 'neval',
        component: () => import('@/views/appProf/materiasprof/añadir/nuevaev.vue')
      },
      {
        path: 'nmat',
        component: () => import('@/views/appProf/materiasprof/añadir/nuevomaterial.vue')
      },
      {
        path: 'com',
        component: () => import('@/views/appProf/materiasprof/materia/comprof.vue')
      },
      {
        path: 'material',
        component: () => import('@/views/appProf/materiasprof/materia/materialprof.vue')
      },
      {
        path: 'material1',
        component: () => import('@/views/appProf/materiasprof/materia/material1.vue')
      },
      {
        path: 'eval',
        component: () => import('@/views/appProf/materiasprof/materia/evalprof.vue')
      },
      {
        path: 'eva1',
        component: () => import('@/views/appProf/materiasprof/materia/eva1.vue')
      },
      {
        path: 'tps',
        component: () => import('@/views/appProf/materiasprof/materia/tpsprof.vue')
      },
      {
        path: 'tp1',
        component: () => import('@/views/appProf/materiasprof/materia/tp1prof.vue')
      },
      {
        path: 'personas',
        component: () => import('@/views/appProf/materiasprof/materia/personasprof.vue')
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
      },
      {
        path: 'chat1',
        component: () => import('@/views/chats/chat.vue')
      },
      {
        path: 'noticia1',
        component: () => import('@/views/noticias/noticia1.vue')
      },
      {
        path: 'noticia11',
        component: () => import('@/views/noticias/noticia11.vue')
      },
      {
        path: 'noticia12',
        component: () => import('@/views/noticias/noticia12.vue')
      },
      {
        path: 'noticia13',
        component: () => import('@/views/noticias/noticia13.vue')
      },
      {
        path: 'pfalum',
        component: () => import('@/views/appAlum/maletinalumno/perfilalumno.vue')
      },
      {
        path: 'listmat',
        component: () => import('@/views/appAlum/maletinalumno/listadematerias.vue')
      },
      {
        path: 'mat1',
        component: () => import('@/views/appAlum/maletinalumno/materia1.vue')
      },
      {
        path: 'tps',
        component: () => import('@/views/appAlum/maletinalumno/materia/tps.vue')
      },
      {
        path: 'tp1',
        component: () => import('@/views/appAlum/maletinalumno/materia/tps/tp1.vue')
      },
      {
        path: 'tp2',
        component: () => import('@/views/appAlum/maletinalumno/materia/tps/tp2.vue')
      },
      {
        path: 'tp3',
        component: () => import('@/views/appAlum/maletinalumno/materia/tps/tp3.vue')
      },
      {
        path: 'comunicados',
        component: () => import('@/views/appAlum/maletinalumno/materia/comunicados.vue')
      },
      {
        path: 'evaluaciones',
        component: () => import('@/views/appAlum/maletinalumno/materia/evaluaciones.vue')
      },
      {
        path: 'evaluacion1',
        component: () => import('@/views/appAlum/maletinalumno/materia/evaluacion1.vue')
      },
      {
        path: 'material',
        component: () => import('@/views/appAlum/maletinalumno/materia/material.vue')
      },
      {
        path: 'material1',
        component: () => import('@/views/appAlum/maletinalumno/materia/material1.vue')
      },
      {
        path: 'personas',
        component: () => import('@/views/appAlum/maletinalumno/materia/personas.vue')
      },
      {
        path: 'nothome1',
        component: () => import('@/views/noticias/nothome1.vue')
      },
      {
        path: 'nothome2',
        component: () => import('@/views/noticias/nothome2.vue')
      },
      {
        path: 'nothome3',
        component: () => import('@/views/noticias/nothome3.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
