<template>
  <div id="login-page">
    <b-button class="mb-2" @click="$router.back()" variant="outline-dark">Back</b-button>
    <h2>Login</h2>

    <b-form @submit.prevent="userLogin" v-if="show">
      <b-form-group label="Email" label-for="login-1" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="login-1"
          v-model="login.user.email"
          type="email"
          required
          placeholder="Email"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Password" label-for="login-2" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="login-2"
          v-model="login.user.password"
          type="password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>

      <b-button block type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        user: {
          email: '',
          password: ''
        }
      },
    show: true,
    }
  },
  methods: {
    // Login function
    async userLogin() {      
      let login = this.login
      await this.$store.dispatch('login', login)
      .then(() => {
        this.$router.push('/')
        location.reload()        
      })
      .catch(err => {
        alert('Invalid email or password.')
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#login-page {
    background-color: white;
    width: 40vw;
    margin: 10vh auto;
    padding: 50px;
}
</style>