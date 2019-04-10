import {CURRENT_USER, MESSAGES, TMP_MESSAGE} from '@/store/const';
import {Message} from '@/models/message';

const actions = {
  [CURRENT_USER]: ({commit}, value) => {
    commit(CURRENT_USER, value);
  },

  signIn: ({dispatch}, value) => {
    dispatch(CURRENT_USER, value);
  },

  logout: ({dispatch}) => {
    dispatch(CURRENT_USER, '');
  },

  addMessage: ({commit, getters}, msg) => {
    const {id} = msg;
    let messages = getters[MESSAGES];
    const index = messages.findIndex(i => i.id === id);

    if (~index) {
      messages[index] = msg;
    } else {
      messages.push({...msg, user: getters[CURRENT_USER]});
    }

    commit(MESSAGES, messages);
  },

  removeMessage: ({commit, getters}, msg) => {
    const {id} = msg;
    const messages = getters[MESSAGES].filter(m => m.id !== id);

    commit(MESSAGES, messages);
  },

  [TMP_MESSAGE]: ({commit, getters}, msg) => {
    commit(TMP_MESSAGE, new Message({...getters[TMP_MESSAGE], ...msg}));
  }
};

export default actions;
