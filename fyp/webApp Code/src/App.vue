<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { Store } from 'vuex';
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->

<!-- As a heading -->
<nav class="navbar bg-light  navbar-expand-lg">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1 center ">Enegy monitoring Sytem</span>
  </div>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active"  >Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/power" class="nav-link" >POWER</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/billing" class="nav-link ">BILLING</RouterLink>
        </li>
      </ul>
    </div>
</nav>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';



</style>

<script>
export default {
  setup() {
    
  },
  methods:{
    
  },
  mounted(){
    this.$store.dispatch('updateTenantPower');
  }
}
</script>
