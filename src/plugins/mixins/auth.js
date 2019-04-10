import store from '@/store';
import {CURRENT_USER} from '@/store/const';

export const AuthMixin = {
  computed: {
    ['$user']: {
      get: function () {
        return store.getters[CURRENT_USER];
      },

      set: function (val) {
        store.dispatch(CURRENT_USER, val);
      }
    },

    isAuth: function () {
      return store.getters['isAuth'];
    }
  },

  methods: {
    test() {
      console.log('111');
    }
  }
};
