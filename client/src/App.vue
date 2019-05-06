<template>
  <div id="app">
    <app-nav></app-nav>

    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav';
export default {
  components:{
    AppNav,
  },
};
</script>


<style lang="scss">
</style>
