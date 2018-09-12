<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<HellowWorld></HellowWorld>-->
    <router-view></router-view>
    <div>
      <ul>
        <li><router-link :to="{ name: 'home'}">首页</router-link></li>
        <li><router-link :to="{ name: 'about', params: {id: '我叫参数'}}">详情页</router-link></li>
        <li><router-link to="/login">登陆</router-link></li>
        <li><router-link :to="{path: '/login', query:{userinfo: 'name is alice'}}">跳转到登陆</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
