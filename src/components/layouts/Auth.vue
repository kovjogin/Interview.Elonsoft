<template>
  <div class="layout-login">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'AuthLayout'
  };
</script>

<style lang="scss">
  .layout-login {
    display    : flex;
    min-height : 100vh;
  }
</style>