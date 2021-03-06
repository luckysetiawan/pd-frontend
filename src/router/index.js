import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// add component
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import Order from '../views/Order.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import Tracking from '../views/Tracking.vue';
// Staff
import StaffProcess from '../views/staff/ProcessOrders.vue';
import StaffView from '../views/staff/ViewOrder.vue';
// Owner
import TransactionLog from '../views/owner/TransactionLog.vue';
import Income from '../views/owner/Income.vue';
import ProductSold from '../views/owner/ProductSold.vue';
// Chef
import Cook from '../views/chef/Cook.vue';
// Delivery Guy
import Delivery from '../views/delivguy/DeliveryOrder.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu,
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
   {
    path: '/tracking',
    name: 'Tracking',
    component: Tracking,
  },
  {
    path: '/staff/process',
    name: 'StaffProcess',
    component: StaffProcess
  },
  {
    path: '/staff/view',
    name: 'StaffView',
    component: StaffView
  },
  {
    path: '/owner/log',
    name: 'ownerLog',
    component: TransactionLog
  },
  {
    path: '/owner/income',
    name: 'ownerIncome',
    component: Income
  },
  {
    path: '/owner/product',
    name: 'ownerProduct',
    component: ProductSold
  },
  {
    path: '/chef/cook',
    name: 'Cook',
    component: Cook
  },
  {
    path: '/delivguy/delivery',
    name: 'Delivery',
    component: Delivery
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
