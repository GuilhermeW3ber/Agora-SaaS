<script>
  import HomePage from './components/HomePage.vue'


  export default {
    name: 'App',
    components: {
      HomePage,
    }
  }
</script>

<template>
  <div>
    <HomePage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style>
  @import './styles.scss';
</style>
