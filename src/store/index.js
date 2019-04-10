import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import {storage} from '@/plugins/libraries/storage';

import {CURRENT_USER, MESSAGES, TMP_MESSAGE} from '@/store/const';
import getters from '@/store/getters';
import actions from '@/store/actions';
import mutations from '@/store/mutations';

Vue.use(Vuex);

/**
 * Обычно еще разбиваю на модули.
 * Но тут не вижу в этом необходимости
 */
export default new Vuex.Store({
  state: {
    [CURRENT_USER]: '',
    [MESSAGES]: [],
    [TMP_MESSAGE]: null
  },
  mutations: mutations,
  actions: actions,
  getters: getters,

  plugins: [
    createPersistedState({
      key: 'cache',
      storage: {
        getItem: key => storage.get(key),
        setItem: (key, value) => storage.set(key, value),
        removeItem: key => storage.remove(key)
      }
    })
  ]
});
