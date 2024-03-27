<script>

// import NavbarMenu from '../Navbar/NavbarMenu.vue'

export default {
  name: 'LoginPage',
  components: {
    // NavbarMenu,
  },
  props: {
    msg: String
  }
  
}
</script>

<template>
  <div class="container">
    <div class="bussines-image">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="input-container">
        <h1 id="title">Bem vindo ao flow</h1>
        <h2 id="sub-title">Entre com sua conta.</h2>
        <h2 id="input-name">E-Mail</h2>
        <input type="text" background-image=""  placeholder="Seu E-Mail">
        <h2>Senha</h2>
        <input type="text" placeholder="Sua Senha">
        <div class="login-container">
          <div class="button-container">
            <a id="submit-button" href="">
              <p>Entrar</p>
            </a>
          </div>
          <div class="login-text-container">
            <h3>Não tem uma conta? <a href="">Cadastre-se.</a></h3>
          </div>
        </div>
    </div>
  </div>
</template>

<style>
  @import '../../styles.scss';
</style>
