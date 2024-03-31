<template>
  <div >
    <img alt="Vue logo" src="../assets/logo.png">
    <NavbarVue/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarVue from '@/components/navbar/NavbarMenu.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarVue
  }
}
</script>
