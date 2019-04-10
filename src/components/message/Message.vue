<template>
  <div>
    <md-list-item>
      <md-avatar class="md-avatar-icon">
        <md-icon>person</md-icon>
      </md-avatar>

      <div class="md-list-item-text">
        <strong>{{ value.user.name }}</strong>
        <p>{{ value.text }}</p>
      </div>

      <md-menu md-size="big" md-direction="bottom-end" v-if="value.isAuthor($user)">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item @click="setMessage(value)">
            <span>Edit</span>
            <md-icon>edit</md-icon>
          </md-menu-item>

          <md-menu-item @click="removeMessage(value)">
            <span>Delete</span>
            <md-icon>delete</md-icon>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-list-item>
  </div>

</template>
<script>
  import {TMP_MESSAGE} from '@/store/const';
  import {Message} from '@/models/message';
  import {mapActions} from 'vuex';

  export default {
    name: 'MessagesList',
    props: {
      value: {
        type: Message,
        default: null
      }
    },

    methods: {
      ...mapActions({
        'removeMessage': 'removeMessage',
        'setMessage': TMP_MESSAGE
      })
    }
  };
</script>