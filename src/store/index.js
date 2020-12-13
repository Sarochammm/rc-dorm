import Vue from 'vue'
import Vuex from 'vuex'
import api from "../service/api"
import router from "../router"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    loadingState: false,
    dialogState: false,
    dialogMsg: "",
    touch: new Set()
  },
  getters: {
    getIsLogin (state) {
      return state.isLogin
    },
    getLoadingState (state) {
      return state.loadingState
    },
    getDialogState (state) {
      return state.dialogState
    },
    getDialogMsg (state) {
      return state.dialogMsg
    },
    getItems (state) {
      return state.touch
    },
    // getItem (state) {
    //   return state.touch
    // },
   },
  mutations: {
    setLoginState(state, value){
      state.isLogin = value
    },
    setLoadingState(state, value){
      state.loadingState = value
    },
    setDialogState(state, value){
      state.dialogState = value
    },
    setDialogMsg(state, value){
      state.dialogMsg = value
    },
    addItems(state, value){
      state.touch.add(value)
    }
  },
  actions: {
    async login({commit},{userid,password}) {
      commit("setLoadingState",true)
      var result = await api.login({userid,password})
      if (!result["Is Error"]){
        commit("setLoadingState",false)
        commit("setLoginState", true)
        localStorage.setItem("userid", result["Error Message"])
        router.push({name:"ChoosePage"})
      } else {
        commit("setLoadingState",false)
        commit("setLoginState", false)
        commit("setDialogState", true)
        commit("setDialogMsg", result["Error Message"])
      }
    },
    restoreLogin({commit}) {
      commit("setLoadingState",true)
      var userid = localStorage.getItem("userid")
      if (userid !== null) {
        commit("setLoadingState",false)
        commit("setLoginState", true)
        router.push({name:"ChoosePage"})
      } else {
        commit("setLoadingState",false)
        commit("setLoginState", false)
      }
    },
    logout({commit}) {
      commit("setLoginState", false)
      router.push({name:"Home"})
      localStorage.removeItem("userid")
    }
  },
  modules: {
  }
})
