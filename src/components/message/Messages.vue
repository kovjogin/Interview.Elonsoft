<template>

  <div>
    <md-list class="md-triple-line">
      <Message
              v-for="(msg, index) in messages"
              :key="index"
              :value="msg" />
    </md-list>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import Message from './Message';

  export default {
    name: 'MessagesList',
    components: {
      Message
    },
    computed: {
      ...mapGetters(['messages'])
    }
  };
</script>