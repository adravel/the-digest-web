<template>
  <div id="top-navbar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/" class="navbar-brand">THE DIGEST</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="isLoggedIn === true" @click="logout">Sign Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  // Check login state
  computed: {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
  methods: {
    // Logout function
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>