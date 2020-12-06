<template>
  <div>
    <div v-if="isLoggedIn === false" class="home">
      <h2 class="text-center">Welcome!</h2>
      <router-link to="/login">
        <b-button block variant="dark">Login</b-button>
      </router-link>
      <router-link to="/signup">
        <b-button block variant="outline-dark">Register</b-button>
      </router-link>  
    </div>
    
    <div v-if="isLoggedIn === true">
      <div class="user-menu">
        <router-link to="/new">
          <b-button block variant="primary">Publish New Article</b-button>
      </router-link>
      </div>
      <article-list></article-list>
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'
import store from '@/store.js'

export default {
  name: 'Home',
  components: {
    ArticleList
  },
  // Check login state
  computed: {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
}
</script>

<style lang="scss">
.home {
  background-color: white;
  width: 40vw;
  margin: 10vh auto 0;
  padding: 50px;
}
.home * {
  margin-bottom: 20px;
}
</style>
