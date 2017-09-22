<template>
  <div class="appPage">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store'

export default {
  name: 'app',
  store,
  data() {
    return {
    };
  }
};
</script>

<style>
  .appPage {
    width: 100%;
    height: 100%;
  }

  [v-cloak] {
    display: none;
  }
</style>
