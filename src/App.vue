<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/studig.png">
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/favorites'>Favorites</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
// import Films from './components/Films.vue'

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav a{
  color: blue;
  padding: 8px;
}
nav a.router-link-exact-active{
  color: red;
 
}
#error{
        text-align: center;
}
</style>
