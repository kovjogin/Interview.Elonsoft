import {CURRENT_USER, MESSAGES, TMP_MESSAGE} from '@/store/const';
import {User} from '@/models/current_user';
import {Message} from '@/models/message';

const getters = {
  [CURRENT_USER]: (state) => new User(state[CURRENT_USER]),
  [MESSAGES]: (state) => state[MESSAGES].map(m => new Message(m)),
  [TMP_MESSAGE]: (state) => (state[TMP_MESSAGE]) ? new Message(state[TMP_MESSAGE]) : new Message(),
  isAuth: (state) => (String(state[CURRENT_USER]).trim().length > 0)

};

export default getters;
