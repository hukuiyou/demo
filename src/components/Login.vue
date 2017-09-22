<template>
    <div class="loginPage">
      <mt-header title="">
        <router-link :to="{ name: 'home', params: { tabId: 'mine' }}" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="loginForm">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="userName">
                <el-input  v-model="ruleForm2.userName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
import route from '../router'

export default {
  name: 'login',
  data() {
    //   var checkAge = (rule, value, callback) => {
    //     if (!value) {
    //       return callback(new Error('年龄不能为空'));
    //     }
    //     setTimeout(() => {
    //       if (!Number.isInteger(value)) {
    //         callback(new Error('请输入数字值'));
    //       } else {
    //         if (value < 18) {
    //           callback(new Error('必须年满18岁'));
    //         } else {
    //           callback();
    //         }
    //       }
    //     }, 1000);
    //   };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
        //   if (this.ruleForm2.checkPass !== '') {
        //     this.$refs.ruleForm2.validateField('checkPass');
        //   }
          callback();
        }
      };
    //   var validatePass2 = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('请再次输入密码'));
    //     } else if (value !== this.ruleForm2.pass) {
    //       callback(new Error('两次输入密码不一致!'));
    //     } else {
    //       callback();
    //     }
    //   };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: '',
          userName: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            //{ validator: validatePass2, trigger: 'blur' }
          ],
          userName: [

          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //alert('submit!');
            this.$store.dispatch('login').then(() => {
              route.go(-1);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style>
  .loginForm {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loginPage .mint-header {
    background-color: white
  }

  .loginPage .mint-button-text,
  .loginPage .mint-button-icon {
    color: black;
  }
</style>
