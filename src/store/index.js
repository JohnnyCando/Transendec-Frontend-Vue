import { createStore } from 'vuex'
import services from './modules/service.js'

export default createStore({
  state() {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { services },
})
