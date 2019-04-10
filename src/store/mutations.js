import {CURRENT_USER, MESSAGES, TMP_MESSAGE} from '@/store/const';

const mutations = {
  [CURRENT_USER]: (state, value) => {
    state[CURRENT_USER] = value;
  },

  [MESSAGES]: (state, value) => {
    state[MESSAGES] = value;
  },

  [TMP_MESSAGE]: (state, value) => {
    state[TMP_MESSAGE] = value;
  }
};

export default mutations;
