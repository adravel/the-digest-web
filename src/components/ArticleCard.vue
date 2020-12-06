<template>
    <div class="article-card">
        <b-card bg-variant="white" text-variant="dark" :title="article.title">
            <b-card-text>{{ article.description }}</b-card-text>

            <b-list-group horizontal text-variant="dark">
                <b-list-group-item>{{ article.author }}</b-list-group-item>
                <b-list-group-item>{{ article.topic }}</b-list-group-item>
                <b-list-group-item>{{ article.pubTime }}</b-list-group-item>
            </b-list-group> <br>

            <div class="d-flex">
                <router-link :to="'/article/' +article.id">
                    <b-button variant="primary">Read</b-button>
                </router-link>
            </div>
        </b-card>
    </div>
</template>

<script>
export default {
    props: [
        'article'
    ]
}
</script>

<style lang="scss" scoped>
.article-card {
    width: 60vw;
    margin: 5vh auto 0;
}
</style>