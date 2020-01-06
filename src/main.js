// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css';
import axios from 'axios';
import global from "../static/global";
Vue.config.productionTip = false;
Vue.use(ViewUI);
Vue.component('top_bar', { /* ... */});
// 将axios和qs挂载
Vue.prototype.Global = global;
// Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  methods:{

  }
});

// axios.get(URL_ROOT.base_url+'user?page=1&size=1').then(data=>{
//   alert('ok');
//   var list = data.list;
//
// }).catch(error=>{
//   alert(error);
// });



//
// this.$axios.get(URL_ROOT.base_url + 'user?page=1&size=1')
//   .then(data => {
//     // alert('get//' + data.data.code);
//     alert('ok');
//   }).catch(error => {
//   alert(error);
// });
// alert(URL_ROOT.base_url);
// function make_request() {
//   var settings = {
//     type:'get',
//     url:URL_ROOT.base_url+'user?page=1&size=1',
//     dataType:'json',
//     error:function (XHR,textStatus,errorThrown) {
//       alert ("XHR="+XHR+"\ntextStatus="+textStatus+"\nerrorThrown=" + errorThrown);
//     },
//     success:function (data,textStatus) {
//       alert(data)
//     },
//     headers:{
//
//     }
//   }
// }
//
//
