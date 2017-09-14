<template>
    <el-row>
        <el-col :span="8" v-for="(o, index) in books" :key="o.title" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }" @click.native="handleCardClick">
            <img :src="o.icon" class="image">
            <div style="padding: 14px;">
                <span>{{o.title}}</span>
                <div class="bottom clearfix">
                <!--<time class="time">{{ currentDate }}</time>-->
                <el-button type="text" class="button">操作按钮</el-button>
                </div>
            </div>
            </el-card>
        </el-col>
    </el-row>
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
    width: 80%;
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
</style>

<script>
import book1Jpg from '../assets/b1.jpg';
import book2Jpg from '../assets/b2.jpg';

export default {
  name: 'books',
  data() {
    return {
      currentDate: new Date(),
      books: [{ title: '历史', icon: book1Jpg }, { title: '文学', icon: book2Jpg }],
    };
  },
  methods: {
    handleCardClick(e) {
      console.info(e);
    },
  },
};
</script>
