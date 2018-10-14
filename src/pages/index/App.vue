
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/page">Page</router-link> |
      <!-- <a href="/page.html">Page</a>  -->
    </div>
    <router-view/>
  </div>
</template> 
<script>
export default {
  name: "App",
  data() {
    return {
      round: Math.round(0, 1000)
    };
  },
  created() {
    console.log(this.round);
  }
};
</script>
<style lang="less">
@color: red;
@width: 200px;
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: @color;
    }
  }
}
</style>
