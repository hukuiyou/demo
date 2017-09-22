<template>
    <div class="block authorDetailPage">
        <mt-header title="">
          <router-link :to="{ name: 'home', params: { tabId: 'authors' }}" slot="left">
              <mt-button icon="back">返回</mt-button>
          </router-link>
        </mt-header>
        <div class="authorInfo">
            <img :src="userAvatar" width="96" height="96">
            </img>
            <h3>{{authorInfo.name}}</h3>
        </div>
        <el-carousel height="150px">
        <el-carousel-item v-for="item in authorBooks" :key="item.id">
            <h3>{{ item.name }}</h3>
        </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex'
import userAvatar from '../assets/userAvatar.jpg';

export default {
  name: 'authorDetail',
  data() {
    return {
        userAvatar: userAvatar,
        authorBooks: [{name: '变形记', id: 1}, {name: '飘', id: 2}, {name: '老人与海', id:3}]
    };
  },

   created() {
    var sAuthorId = this.$route.params.id;
    this.$store.dispatch('getAuthorDetail', {authorId: sAuthorId});
  },

  beforeDestroy() {
    this.$store.dispatch('resetAuthorDetail');
  },

  computed: {
    ...mapState({
        authorInfo: state => state.authorDetail,
    }),
  },
};
</script>

<style>
.authorDetailPage .mint-header {
  background-color: white
}

.authorDetailPage .mint-button-text,
.authorDetailPage .mint-button-icon {
  color: black;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>

