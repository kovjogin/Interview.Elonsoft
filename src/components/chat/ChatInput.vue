<template>
  <form @submit.prevent="submit">
    <md-field>
      <label>Your message</label>
      <md-input :value="tmp_message.text" @input="update"></md-input>
      <md-button class="md-icon-button md-dense md-primary" @click="submit">
        <md-icon>send</md-icon>
      </md-button>
    </md-field>
  </form>
</template>

<script>
  import {validationMixin} from 'vuelidate';
  import {required} from 'vuelidate/lib/validators';
  import {Message} from '@/models/message';
  import {mapActions, mapGetters} from 'vuex';
  import {TMP_MESSAGE} from '@/store/const';
  import debounce from 'underscore-es/debounce';

  export default {
    name: 'ChatInput',
    mixins: [validationMixin],
    validations: {
      tmp_message: {
        text: {required}
      }
    },
    computed: {
      ...mapGetters({
        'tmp_message': TMP_MESSAGE
      })
    },

    methods: {
      ...mapActions({
        'addMessage': 'addMessage',
        'setMessage': TMP_MESSAGE
      }),

      update: debounce(function (text) {
        this.setMessage({text: text.trim()});
      }, 300),

      submit: function () {
        if (!this.$v.$invalid) {
          this.addMessage(this.tmp_message);
          this.setMessage(new Message());
        }
      }
    }
  };
</script>