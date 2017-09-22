<template>
  <div class="bookDetailPage">
    <mt-header title="">
        <router-link :to="{ name: 'home', params: { tabId: 'repo' }}" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
    <div class="bookImage">
      <img :src="bookInfo.coverImgUrl"></img>
    </div>
    <h2>{{bookInfo.name}}</h2>
    <div class="bookAuthor">{{bookInfo.authors}}</div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="bookChapters">详情</mt-tab-item>
      <mt-tab-item id="bookComments">评论</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="bookChapters">
        <ul>
          <li v-for="chapter in bookInfo.chapters" :key="chapter.id">
            <h4>{{chapter.chapterTitle}}</h4>
            <p>{{chapter.content}}</p>
          </li>
        </ul> 
      </mt-tab-container-item>
      <mt-tab-container-item id="bookComments">
        <div class="item-view-comments">
        <!--<p class="item-view-comments-header">
          {{ comments.length > 0 ? ' 评论' : '没有评论.' }}
          <spinner :show="loading"></spinner>
        </p>-->
        <ul class="comment-children">
          <comment v-for="id in comments" :key="id" :id="id"></comment>
        </ul>
        </div>
        
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Comment from './Comment.vue'

export default {
  name: 'bookDetail',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: 'bookComments'
    };
  },
  computed: {
    ...mapState({
        bookInfo: state => state.bookDetail,
    }),

    comments (){
      return ['1', '2'];
    }
  },


  created() {
    var sBookId = this.$route.params.id;
    this.$store.dispatch('getBookDetail', {bookId: sBookId});
  },

  beforeDestroy() {
    this.$store.dispatch('resetBookDetail');
  },

  components: {Comment}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.bookDetailPage {
  overflow-y: auto;
  height: 100%;
}

.bookDetailPage .mint-header {
  background-color: white
}

.bookDetailPage .mint-button-text,
.bookDetailPage .mint-button-icon {
  color: black;
}

.bookDetailPage h2 {
  text-align: center;
}

.bookAuthor {
  text-align: center;
  color: #71a9da;
}

.bookImage {
  display: flex;
  justify-content: center;
}
</style>

<style lang="stylus">
.item-view-header
  background-color #fff
  padding 1.8em 2em 1em
  box-shadow 0 1px 2px rgba(0,0,0,.1)
  h1
    display inline
    font-size 1.5em
    margin 0
    margin-right .5em
  .host, .meta, .meta a
    color #828282
  .meta a
    text-decoration underline

.item-view-comments
  background-color #fff
  margin-top 10px
  padding 0 2em .5em

.item-view-comments-header
  margin 0
  font-size 1.1em
  padding 1em 0
  position relative
  .spinner
    display inline-block
    margin -15px 0

.comment-children
  list-style-type none
  padding 0
  margin 0

@media (max-width 600px)
  .item-view-header
    h1
      font-size 1.25em
</style>
