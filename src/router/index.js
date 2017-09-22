import Vue from 'vue';
import Router from 'vue-router';
import BookDetail from '@/components/BookDetail';
import Home from '@/components/Home';
import Login from '@/components/Login';
import AuthorDetail from '@/components/AuthorDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/bookDetail/:id',
      name: 'detail',
      component: BookDetail,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/authorDetail/:id',
      name: 'authorDetail',
      component: AuthorDetail,
    },
  ],
});
