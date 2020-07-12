import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from "../components/Content";
import Main from "../components/Main";
import hujw from "../components/hujw";


//安装路由
Vue.use(VueRouter);


//配置导出路由
export default new VueRouter({
  routes: [
    {
      //路由路径
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      //路由路径
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      //路由路径
      path: '/hujw',
      name: 'Main',
      component: hujw
    }
  ]
});
