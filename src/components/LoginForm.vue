<template>
  <md-card class="card-login">
    <form @submit.prevent="submit">
      <md-card-header>
        <div class="md-title">
Login
</div>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('login')">
              <label>Your Name</label>
              <md-input name="name" v-model="login" />
              <span class="md-error" v-if="!$v.login.required">The login is required</span>
            </md-field>
          </div>
        </div>
</md-card-content>

      <md-card-actions>
        <md-button class="md-raised md-primary" type="submit">
Login
</md-button>
      </md-card-actions>
    </form>
  </md-card>
</template>

<script>
  import {mapActions} from 'vuex';
  import {validationMixin} from 'vuelidate';
  import {required} from 'vuelidate/lib/validators';

  export default {
    name: 'LoginForm',
    mixins: [validationMixin],
    data: () => ({
      login: null
    }),
    validations: {
      login: {
        required
      }
    },
    methods: {
      ...mapActions(['signIn']),
      getValidationClass(fieldName) {
        const field = this.$v[fieldName];

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          };
        }
      },

      submit() {
        this.$v.$touch();

        if (!this.$v.$invalid) {
          this.signIn(this.login);
          this.$router.push({name: 'chat'});
        }
      }
    }
  }
  ;
</script>

<style lang="scss" scoped>
  .card-login {
    max-width : 350px;
    width     : 100%;
  }
</style>