import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
// 安装插件
Vue.use(Vuex)
const state = {
  counter: 1000,
  students: [
    {
      name: 'hhh',
      age: 20
    },
    {
      name: 'kobe',
      age: 33
    },
    {
      name: 'css',
      age: 24
    }
  ],
  test: {
    name: 'test'
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

export default store
