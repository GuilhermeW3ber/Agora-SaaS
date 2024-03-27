<script>
  // import HomePage from './components/HomePage.vue'
  import LoginPage from './components/Pages/LoginPage.vue';


  export default {
    name: 'App',
    components: {
      // HomePage,
      LoginPage,
    }
  }
</script>

<template>
  <div>
    <!-- <HomePage msg="Welcome to Your Vue.js App"/> -->
    <LoginPage/>
  </div>
</template>

<style>
  @import './styles.scss';
</style>
