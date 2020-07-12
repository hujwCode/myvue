<template>
  <div id="app">
    <router-link to="/main">首页</router-link>
    <router-link to="/content">内容页</router-link>
    <router-link to="/hujw">hujw页面</router-link>
    <router-view></router-view>
    <br>
    <img src="./assets/logo.png">
    <HelloWorld/>
    <h1>不容易啊胡佳伟</h1>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Content from "./components/Content";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Content
  }
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
