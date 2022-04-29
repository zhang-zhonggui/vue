<template>
  <div id="app">
    <h3>张中贵的登录系统</h3>
    <el-form :model="infoData" status-icon :rules="rules" ref="infoData" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="infoData.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="infoData.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('infoData')">提交</el-button>
        <el-button @click="resetForm('infoData')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from "@/api/login";
import {setToken, getToken} from "@/utils/auth";

export default {
  name: "LoginVue",
  data() {
    return {
      infoData: {},
      rules: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.infoData).then((response) => {
            if (response.data.code==1){
              setToken(response.data.data)
              alert(getToken())
              this.$router.push({ path: "/" }).catch(()=>{});
            }else {
              this.$message({
                showClose: true,
                message: response.data.msg,
                type: 'error'
              });
            }
          })
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
}
</script>
<style scoped>
#app {
  width: 800px;
  margin: 150px auto;
}
</style>
