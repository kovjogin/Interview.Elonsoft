<template>
  <div class="page-error">
    <h1>404</h1>
    <p>
      <router-link :to="{name: 'chat'}">На главную</router-link>
    </p>
  </div>
</template>

<style lang="scss">
  .page-error {
    width           : 100%;
    display         : flex;
    min-height      : 100vh;
    align-self      : center;
    flex-direction  : column;
    justify-content : center;
    text-align      : center;

    h1 {
      font-size   : 100px;
      line-height : 100px;
      font-weight : 300;
      height      : auto;
      margin      : 0;
    }

    a {

    }
  }
</style>