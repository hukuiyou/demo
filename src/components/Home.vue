<template>
  <div class="page-tabbar">
    <div class="pageContent">
      <div class="page-title" v-show="selected === 'repo'">{{pageTitle}}</div>
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="repo">
          <books></books>
        </mt-tab-container-item>
        <mt-tab-container-item id="authors">
          <author></author>
        </mt-tab-container-item>
        <mt-tab-container-item id="mine">
          <div class="page-part">
            <user></user>
          </div>
          <!--<router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>-->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selected" fixed class="tabbarBottom">
      <mt-tab-item id="repo">
        <img slot="icon" src="../assets/100x100.png">
        书架
      </mt-tab-item>
      <mt-tab-item id="authors">
        <img slot="icon" src="../assets/100x100.png">
        作者
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="../assets/100x100.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Books from './Books';
import User from './User';
import Author from './Author';
//import store from './store'

export default {
  name: 'home',
  //store,
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
    }
  },

  beforeRouteEnter: (to, from, next) => {
     next(vm => {
       if (to.params.tabId){
         vm.selected = to.params.tabId;
       } else {
         vm.selected = 'repo';
       }
       
     })
  },
  
  components: { Books, User, Author },
};
</script>

<style>
  .page-tabbar {
    overflow-y: auto;
    height: 100%;
  }

  .page-title {
    text-align: center;
    height: 2rem;
  }

  .page-tabbar-container {
    height: calc(100% - 2rem);
    overflow-y: auto;
  }

  .tabbarBottom {
    height: 3rem;
  }

  .pageContent {
    height: calc(100% - 3rem);
  }
</style>
