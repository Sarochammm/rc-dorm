import Vue from 'vue'
import Vuex from 'vuex'
import api from "../service/api"
import router from "../router"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    loadingState: false
  },
  getters: {
    getIsLogin (state) {
      return state.isLogin
    },
    getLoadingState (state) {
      return state.loadingState
    }
  },
  mutations: {
    setLoginState(state, value){
      state.isLogin = value
    },
    setLoadingState(state, value){
      state.loadingState = value
    }
  },
  actions: {
    async login({commit},{userid,password}){
      commit("setLoadingState",true)
      var result = await api.login({userid,password})
      if (!result["Is Error"]){
        router.push({name:"ChoosePage"})
        commit("setLoadingState",false)
        commit("setLoginState", true)
      } else {
        commit("setLoginState", false)
      }
    }
    
  },
  modules: {
  }
})
