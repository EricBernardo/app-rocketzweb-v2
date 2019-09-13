import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set ath, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/profile',
    component: Layout,
    roles: ['root', 'administrator', 'client'],
    hidden: true,
    children: [
      {
        path: '',
        name: 'profile',
        component: () => import('@/views/profile/index'),                
      },
    ]
  },

  {
    path: '/',
    component: Layout,
    roles: ['root', 'administrator', 'client'],
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/company',
    roles: ['root'],
    component: Layout,    
    children: [
      {
        path: '',
        name: 'company',
        component: () => import('@/views/company/list'),        
        meta: { title: 'Empresa', icon: 'company' }
      },
      {
        path: '/company/create',
        name: 'company.create',
        component: () => import('@/views/company/form'),
        meta: { title: 'Empresa / Cadastrar' },
        hidden: true
      },
      {
        path: '/company/edit/:id',
        name: 'company.edit',
        component: () => import('@/views/company/form'),
        meta: { title: 'Empresa / Editar' },
        hidden: true
      },
    ]
  },

  {
    path: '/client',
    component: Layout,
    roles: ['root', 'administrator'],
    children: [
      {
        path: '',
        name: 'client',
        component: () => import('@/views/client/list'),
        meta: { title: 'Cliente', icon: 'user' }
      },
      {
        path: '/client/create',
        name: 'client.create',
        component: () => import('@/views/client/form'),
        meta: { title: 'Cliente / Cadastrar' },
        hidden: true
      },
      {
        path: '/client/edit/:id',
        name: 'client.edit',
        component: () => import('@/views/client/form'),
        meta: { title: 'Cliente / Editar' },
        hidden: true
      },
    ]
  },

  {
    path: '/shipping_company',
    component: Layout,
    roles: ['root', 'administrator'],
    children: [
      {
        path: '',
        name: 'shipping_company',
        component: () => import('@/views/shipping_company/list'),
        meta: { title: 'Transportadora', icon: 'user' }
      },
      {
        path: '/shipping_company/create',
        name: 'shipping_company.create',
        component: () => import('@/views/shipping_company/form'),
        meta: { title: 'Transportadora / Cadastrar' },
        hidden: true
      },
      {
        path: '/shipping_company/edit/:id',
        name: 'shipping_company.edit',
        component: () => import('@/views/shipping_company/form'),
        meta: { title: 'Transportadora / Editar' },
        hidden: true
      },
    ]
  },

  {
    path: '/shipping_company_vehicle',
    component: Layout,
    roles: ['root', 'administrator'],
    children: [
      {
        path: '',
        name: 'shipping_company_vehicle',
        component: () => import('@/views/shipping_company_vehicle/list'),
        meta: { title: 'Veículo', icon: 'user' }
      },
      {
        path: '/shipping_company_vehicle/create',
        name: 'shipping_company_vehicle.create',
        component: () => import('@/views/shipping_company_vehicle/form'),
        meta: { title: 'Veículo / Cadastrar' },
        hidden: true
      },
      {
        path: '/shipping_company_vehicle/edit/:id',
        name: 'shipping_company_vehicle.edit',
        component: () => import('@/views/shipping_company_vehicle/form'),
        meta: { title: 'Veículo / Editar' },
        hidden: true
      },
    ]
  },

  {
    path: '/product_category',
    component: Layout,
    roles: ['root', 'administrator'],
    redirect: '/product_category',
    name: 'product_category',
    children: [
      {
        path: 'list',
        name: 'product_category',
        component: () => import('@/views/product_category/list'),
        meta: { title: 'Categoria', icon: 'category' },
      },
      {
        path: 'create',
        name: 'product_category.create',
        component: () => import('@/views/product_category/form'),
        meta: { title: 'Categoria / Cadastrar' },
        hidden: true
      },
      {
        path: 'edit/:id',
        name: 'product_category.edit',
        component: () => import('@/views/product_category/form'),
        meta: { title: 'Categoria / Editar' },
        hidden: true
      },
    ]
  },

  {
    path: '/product',
    component: Layout,
    roles: ['root', 'administrator'],
    redirect: '/product',
    name: 'product',
    children: [
      {
        path: 'list',
        name: 'product',
        component: () => import('@/views/product/list'),
        meta: { title: 'Produto', icon: 'product' },
      },
      {
        path: 'create',
        name: 'product.create',
        component: () => import('@/views/product/form'),
        meta: { title: 'Produto / Cadastrar' },
        hidden: true
      },
      {
        path: 'edit/:id',
        name: 'product.edit',
        component: () => import('@/views/product/form'),
        meta: { title: 'Produto / Editar' },
        hidden: true
      },
    ]
  },

  {
    path: '/user',
    component: Layout,
    roles: ['root', 'administrator'],
    redirect: '/user',
    name: 'user',
    children: [
      {
        path: 'list',
        name: 'user',
        component: () => import('@/views/user/list'),
        meta: { title: 'Usuário', icon: 'user' },
      },
      {
        path: 'create',
        name: 'user.create',
        component: () => import('@/views/user/form'),
        meta: { title: 'Usuário / Cadastrar' },
        hidden: true
      },
      {
        path: 'edit/:id',
        name: 'user.edit',
        component: () => import('@/views/user/form'),
        meta: { title: 'Usuário / Editar' },
        hidden: true
      },
    ]
  },

  {
    path: '/order',
    component: Layout,
    roles: ['root', 'administrator', 'client'],
    redirect: '/order',
    name: 'order',
    children: [
      {
        path: 'list',
        name: 'order',
        component: () => import('@/views/order/list'),
        meta: { title: 'Pedido', icon: 'order' },
      },
      {
        path: 'create',
        name: 'order.create',
        component: () => import('@/views/order/form'),
        meta: { title: 'Pedido / Cadastrar' },
        hidden: true
      },
      {
        path: 'edit/:id',
        name: 'order.edit',
        component: () => import('@/views/order/form'),
        meta: { title: 'Pedido / Editar' },
        hidden: true
      },
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
