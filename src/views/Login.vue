<template>
  <LoginForm />
</template>

<script>
  import LoginForm from '@/components/LoginForm';

  export default {
    name: 'LoginPage',
    components: {LoginForm}
  };
</script>

<style lang="scss">
  .card-login {
    flex       : 0 0 auto;
    margin     : auto;
    margin-top : 20vh;
  }
</style>