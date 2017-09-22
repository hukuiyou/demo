<template>
    <!--<el-row :gutter="20">
        <el-col :span="8" v-for="(o, index) in books" :key="o.title">
            <el-card :body-style="{ padding: '0px' }" @click.native="handleCardClick">
            <img :src="o.icon" class="image">
            <div style="padding: 14px;">
                <span>{{o.title}}</span>
                <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
                </div>
            </div>
            </el-card>
        </el-col>
    </el-row>-->
    <div>
      <el-row v-for="(row, rowIndex) in rowBooks" :key="rowIndex" :gutter="20" class="bookRow">
        <el-col :span="8" v-for="(o, colIndex) in row" :key="o.id">
          <el-card :body-style="{ padding: '0px' }" @click.native="handleCardClick(o)" class="bookListCard">
            <img :src="o.coverImgUrl" class="image">
            <div style="padding: 14px;">
                <span class="bookName">{{o.name}}</span>
                <div class="bottom clearfix">
                <!--<el-button type="text" class="button">操作按钮</el-button>-->
                </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 256px;
    height: 256px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .bookRow {
    margin-bottom: 10px;
  }

  .bookListCard {
    height: 20rem;
  }

  @media screen and (max-width: 480px) {
    .image {
      width: 100px;
      height: 128px;
      display: block;
    }

    .bookListCard {
      height: 14rem;
    }

    .bookName {
      font-size: 0.8rem;
    }
  }
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import route from '../router'

export default {
  name: 'books',
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {
    handleCardClick(o) {
      let path = `/bookDetail/${o.id}`;
      route.push(path);
    },
  },
  computed: {
    ...mapGetters({
     books: 'allBooks',
     rowBooks: 'rowBooks'
    }),
  },
  created () {
    this.$store.dispatch('getAllBooks')
  }

};
</script>
