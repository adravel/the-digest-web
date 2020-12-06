<template>
  <div class="article-list">
    <div    
    v-for="article in articlex"
    :article="article"
    :key="article.id"    
    >
      <ArticleCard :article="article"/>
    </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'

export default {
  components: {
    ArticleCard
  },
  data() {
    return {
      article: {},
      articlex: []
    }
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    // Get all articles function
    async getArticles() {
      await this.$http.get('https://the-digest-app.herokuapp.com/api/articles')
      .then((response) => {
        console.log(response.data.data)
        this.articlex = response.data.data
      })
      .catch((error) => {
        alert('Cannot load articles. Refresh the page.')
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss">
.user-menu {
  width: 40vw;
  margin: 5vh auto 0;
  padding: 0 50px 0;
}
</style>