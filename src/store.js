import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('user-token') || '',
  },

  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, x){
      state.status = 'success'
      state.token = x
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    }
  },

  actions: {
    // Login action
    login({commit}, login){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          method: 'post',
          url: 'https://the-digest-app.herokuapp.com/api/session',
          headers: { 
            'Content-Type': 'application/json'     
          },
          data : JSON.stringify(login)
        })
        .then(response => {
          const token = response.data.data.token
          localStorage.setItem('user-token', token)
          console.log(response.data.data)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token)
          resolve(response)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('user-token')
          reject(err)
        })
      })
    },
    // Register action
    register({commit}, register){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          method: 'post',
          url: 'https://the-digest-app.herokuapp.com/api/registration',
          headers: { 
            'Content-Type': 'application/json'     
          },
          data : JSON.stringify(register)
        })
        .then(response => {
          const token = response.data.data.token
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          console.log(response.data.data)
          commit('auth_success', token)
          resolve(response)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    // Logout action
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('user-token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },

  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})