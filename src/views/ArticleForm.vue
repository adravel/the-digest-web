<template>
  <div class="article-form">
    <b-button class="mb-2" @click="$router.back()" variant="outline-dark">Back</b-button>
    <h2>New Article</h2>

    <b-form @submit.prevent="publishThis" v-if="show">
        <b-form-group label="Title" label-for="publish-1" label-cols-sm="4" label-cols-lg="3">
            <b-form-input
            id="publish-1"
            v-model="publish.article.title"
            required
            placeholder="Title"
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Source" label-for="publish-2" label-cols-sm="4" label-cols-lg="3">
            <b-form-input
            id="publish-2"
            v-model="publish.article.source"
            required
            placeholder="Source"
            ></b-form-input>
        </b-form-group>

        <b-form-group label="URL" label-for="publish-3" label-cols-sm="4" label-cols-lg="3">
            <b-form-input
            id="publish-3"
            v-model="publish.article.url"
            type="url"
            required
            placeholder="Source's URL"
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Author" label-for="publish-4" label-cols-sm="4" label-cols-lg="3">
            <b-form-input
            id="publish-4"
            v-model="publish.article.author"
            required
            placeholder="Author Name"
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Topic" label-for="publish-5" label-cols-sm="4" label-cols-lg="3"> 
            <b-form-input
            id="publish-5"
            v-model="publish.article.topic"
            required
            placeholder="Topic">
            </b-form-input>
        </b-form-group>

        <b-form-group label="Description" label-for="publish-6" label-cols-sm="4" label-cols-lg="3">
            <b-form-textarea
            id="publish-6"
            v-model="publish.article.description"
            required
            rows="4"
            max-rows="8"
            placeholder="Description"
            ></b-form-textarea>
        </b-form-group>        

        <b-form-group label="Image" label-for="publish-7" label-cols-sm="4" label-cols-lg="3">
            <b-form-input
            id="publish-7"
            v-model="publish.article.img"
            type="url"
            required
            placeholder="Image's URL"
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Content" label-for="publish-8" label-cols-sm="4" label-cols-lg="3">
            <b-form-textarea
            id="publish-8"
            v-model="publish.article.content"
            required
            rows="10"
            max-rows="20"
            placeholder="Content"
            ></b-form-textarea>
        </b-form-group>

        <b-form-group label="Published Time" label-for="publish-9" label-cols-sm="4" label-cols-lg="3">
            <b-form-input
            id="publish-9"
            v-model="publish.article.pubTime"
            required
            placeholder="yyyy-mm-ddThh:mm:ss"
            ></b-form-input>
        </b-form-group>

        <b-button block type="submit" variant="primary">Publish</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      publish: {
        article: {
          title: '',
          source: '',
          url: '',
          author: '',
          topic: '',
          description: '',
          img: '',
          content: '',
          pubTime: ''
        }
      },
      show: true
    }
  },
  methods: {
    async publishThis() {
      let publish = this.publish
      axios({
        method: 'post',
        url: 'https://the-digest-app.herokuapp.com/api/articles',
        headers: {
          'Content-Type': 'application/json'     
        },
        data : JSON.stringify(publish)
      })
      .then(() => {
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
.article-form {
    background-color: white;
    width: 40vw;
    margin: 10vh auto 0;
    padding: 50px;
}
</style>