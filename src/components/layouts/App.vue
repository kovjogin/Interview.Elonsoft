<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>

          <span class="md-title">{{ $user.name }}</span>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>person</md-icon>
            <span class="md-list-item-text">Profile</span>
          </md-list-item>

          <md-list-item @click="exit">
            <md-icon>exit_to_app</md-icon>
            <span class="md-list-item-text">Logout</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'AppLayout',
    data: () => ({
      menuVisible: false
    }),

    methods: {
      ...mapActions(['logout']),

      exit: function () {
        this.logout();
        this.$router.push({name: 'login'});
      }
    }
  };
</script>

<style lang="scss" scoped>
  .md-drawer {
    width : 230px;
  }

  .md-app {
    min-height : 100vh;

    .md-app-content {
      height : auto;
    }
  }
</style>