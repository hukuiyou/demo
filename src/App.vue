<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title" v-show="selected === 'repo'">{{pageTitle}}</div>
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="repo">
          <!--<mt-cell v-for="n in 10" :title="'cell ' + n" />-->
          <books></books>
        </mt-tab-container-item>
        <!--<mt-tab-container-item id="订单">
          <mt-cell v-for="n in 5" :title="'订单 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <mt-cell v-for="n in 7" :title="'发现 ' + n" />
        </mt-tab-container-item>-->
        <mt-tab-container-item id="mine">
          <div class="page-part">
            <user></user>
            <!--<mt-cell v-for="n in 12" :title="'cell ' + n" />-->
          </div>
          <!--<router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>-->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="repo">
        <img slot="icon" src="./assets/100x100.png">
        书架
      </mt-tab-item>
      <!--<mt-tab-item id="订单">
        <img slot="icon" src="./assets/100x100.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="./assets/100x100.png">
        发现
      </mt-tab-item>-->
      <mt-tab-item id="mine">
        <img slot="icon" src="./assets/100x100.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Books from './components/Books';
import User from './components/User';
import store from './store'

export default {
  name: 'app',
  store,
  data() {
    return {
      selected: 'repo',
    };
  },
  computed: {
    pageTitle() {
      if (this.selected === 'repo') {
        return '书架';
      }
      return 'Andy';
    },
  },
  components: { Books, User },
};
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }

  .page-title {
    text-align: center;
  }
</style>
