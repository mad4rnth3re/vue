<template>
  <div class="container">
    <Layouts />
    <div class="position-absolute top-50 start-50 translate-middle">
      <h2>Welcome to home page</h2>
      <button v-on:click="logout" class="btn btn-info mb-4 mt-2">log out</button>
    </div>
  </div>
</template>

<script>
import Layouts from '@/components/Layouts.vue'
export default {
  name: 'HelloWorld',
  components:{
    Layouts
  },
  methods:{
    logout(){
      localStorage.clear()
      this.$router.push({name : 'Login'})
      alert('log out success')
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
