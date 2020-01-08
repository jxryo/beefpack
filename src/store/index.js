import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//创建store生命周期函数
const store = new Vuex.Store({
  state: {
    is_login : false,
    is_admin : false
  }
});
export default store;

