import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/auth',
      component: () => import(/* webpackChunkName: "auth" */ './components/layouts/Auth'),
      beforeEnter: ((to, from, next) => {
        if (store['getters'].isAuth) {
          next({name: 'chat'});
        }
        next();
      }),
      children: [
        {
          path: '',
          redirect: {name: 'login'}
        },

        {
          path: 'login',
          name: 'login',
          component: () => import(/* webpackChunkName: "auth" */ './views/Login')
        }

        /**
         * Ниже добавляем страницу восстановления пароля,
         * регистрации и т.д
         */
      ]
    },

    {
      path: '/',
      component: () => import(/* webpackChunkName: "auth" */ './components/layouts/App'),
      beforeEnter: ((to, from, next) => {
        if (!store['getters'].isAuth) {
          next({name: 'login'});
        }
        next();
      }),
      children: [
        {
          path: '/',
          name: 'chat',
          component: () => import(/* webpackChunkName: "404" */ './views/Chat')
        }
      ]
    },

    {
      path: '*',
      component: () => import(/* webpackChunkName: "404" */ './views/404')
    }
  ]
});
