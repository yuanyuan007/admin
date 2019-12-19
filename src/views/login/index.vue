<template>
  <div class="container content">
    <div class="contents">
      <div class="contents_title">支付检察员管理系统</div>
      <div class="contents_box">
        <el-form ref="login" :model="userData" :rules="rule" label-width="40px">
          <el-form-item prop="username">
            <el-input class="login_input" placeholder="请输入用户名" v-model="userData.username" prop="username">
              <template slot="prepend"><i class="icon el-icon-s-custom"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input class="login_input" type="password" placeholder="请输入登录密码" v-model="userData.password" prop="password">
              <template slot="prepend"><i class="icon el-icon-lock"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_input" type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
  </div>
</template>
<script>
import api from 'api';
import http from 'http';
import { setCookie, setLoc, getLoc } from 'utils'
import { firstZMofen } from 'utils/rules'
export default {
  data() {
    return {
      checked: false,
      userData: {
        username: '',
        password: '',
        isChecked: false
      },
      rule: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: firstZMofen, trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入登录密码', trigger: 'blur' }],
      },
    }
  },
  computed: {
  },
  created() {
    let that = this;
    document.onkeypress = function(e) {
      var keycode = document.all ? event.keyCode : e.which;
      if(keycode == 13) {
        that.login();// 登录方法名
        return false;
      }
    };

  },
  mounted() {

  },
  methods: {
    //获取登录信息
    login() {
      let obj = {
        username: this.userData.username,
        password: this.userData.password
      };
      this.$router.push({ name: 'homePage' });
      return;
      this.$refs.login.validate((valid) => {
        if(valid) {

        }
      })


    }
  },

}
</script>  
<style lang="less" scoped>
@import "./less/login.less";
</style>