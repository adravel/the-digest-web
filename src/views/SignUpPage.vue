<template>
  <div id="signup-page">
    <b-button class="mb-2" @click="$router.back()" variant="outline-dark">Back</b-button>
    <h2>Sign Up</h2>

    <b-form @submit.prevent="userRegister" v-if="show">
      <b-form-group label="Email" label-for="signup-1" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="sign-up-1"
          v-model="register.user.email"
          type="email"
          required
          placeholder="Email"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Password" label-for="signup-2" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="signup-2"
          v-model="register.user.password"
          type="password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group label="Confirm Password" label-for="signup-3" label-cols-sm="4" label-cols-lg="3" >
        <b-form-input
          id="signup-3"
          v-model="password2"
          type="password"
          placeholder="Re-enter your password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button block type="submit" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        user: {
          email: '',
          password: ''
        }
      },
      password2: '',      
      show: true
    }
  },
  methods: {
    async userRegister() {
      let register = this.register
      await this.$store.dispatch('register', register)
      .then(() => {
        this.$router.push('/')        
      })
      .catch(err => {
        alert('Error. Please try again.')
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#signup-page {
    background-color: white;
    width: 40vw;
    margin: 10vh auto;
    padding: 50px;
}
</style>