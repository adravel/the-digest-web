<template>
  <div id="app">
    <top-navbar></top-navbar>

    <router-view/>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar'
import store from '@/store.js'
import axios from 'axios'

export default {
  components: {
    TopNavbar
  },
  created: function () {
    // Add a response interceptor
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout)
        }
        throw err
      })
    })
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  background-color: whitesmoke;
}
</style>
