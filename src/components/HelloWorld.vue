<template>
  <div class="hello">
    <h2>Welcome to home page</h2>
    <router-link :to="{name: 'Login'}">Log out</router-link>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
