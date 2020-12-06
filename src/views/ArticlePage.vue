<template>
    <div class="article-page">
        <div class="d-flex">
            <b-button @click="$router.back()" variant="outline-dark" class="mr-2">Back</b-button>
            <b-button @click="deleteArticle" variant="danger" class="ml-auto">Delete</b-button>
        </div>
        
        <h1 class="article-title">{{ article.title }}</h1>
        <h5 class="article-desc">{{ article.description}}</h5>
        <b-button class="article-source" variant="outline-dark" :href="article.url" target="_blank">
            {{ article.source }}
        </b-button>
        <b-list-group horizontal text-variant="dark">
            <b-list-group-item class="article-author">{{ article.author }}</b-list-group-item>
            <b-list-group-item class="article-topic"> {{ article.topic }}</b-list-group-item>
            <b-list-group-item class="article-date">{{ article.pubTime }}</b-list-group-item>
        </b-list-group>
        <b-img :src="article.img" fluid rounded></b-img>
        <div class="article-content">{{ article.content }}</div> 
    </div>
</template>

<script>
export default {
    name: 'ArticlePage',
    data () {
        return {
            article: {},
            articlex: []
        }
    },
    created() {
        this.getArticles()
    },
    methods: {
        // Get all articles
        async getArticles() {
            await this.$http.get('https://the-digest-app.herokuapp.com/api/articles')
            .then((response) => {
                console.log(response.data.data)
                this.articlex = response.data.data
                const ID = Number(this.$route.params.id)
                const theArticle = this.articlex.find(article => article.id === ID)
                this.article = theArticle
            })
            .catch((error) => {
                alert('Cannot load articles. Refresh the page.')
                console.log(error)
            })
        },
        // Delete this article        
        async deleteArticle() {
            await this.$http.delete(`https://cors-anywhere.herokuapp.com/https://the-digest-app.herokuapp.com/api/articles/${this.article.id}`)
            .then((response) => {
                this.$router.push('/')
            })
            .catch((error) => {
                alert('Error. Please try again.')
                console.log(error)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.article-page {
    background-color: white;
    width: 60vw;
    margin: 5vh auto 0;
    padding: 50px;
}

.article-page * {
    margin-bottom: 20px;
}
</style>