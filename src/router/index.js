import Vue from 'vue'
import Vuerouter from 'vue-router'

const Home = () => import('../views/Home/Home');
const Category = () => import('../views/Category/Category');
const Cart = () => import('../views/Cart/Cart');
const Profile = () => import('../views/Profile/Profile');

// 1.安裝插件
Vue.use(Vuerouter)

// 2.創建router
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new Vuerouter({
  routes,
  mode: 'history'
})

// 3.導出router
export default router
