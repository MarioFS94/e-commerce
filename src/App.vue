<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="./assets/logo.png" alt="Vue.js PWA" width="50px">
        <span>Macommerce</span>
        <!-- <img src="./assets/menu.svg" alt="Toogle menu"> -->
      </div>
      
      <!-- <div class="banner">
        <div class="hero-image">
          <div class="hero-text">
            <h1 >I am John Doe</h1> style="font-size:50px" 
            <p>And I'm a Photographer</p>
            <button>Hire me</button>
          </div>
        </div>
      </div> -->

      <div class="log">
        <a href="">Log-in</a> / <a href="">Sing-up</a> 
      </div>
    </header>
    <nav>
      <ul>
        <li><a href="">Inicio</a></li>
        <li><a href="">Productos</a></li>
      </ul>
    </nav>    
    <main>      
      <router-view></router-view>
    </main>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  component: {}
}
</script>

<style>

nav{
  width: -webkit-fill-available;
  /* width: 100%; */
  background-color: #00530e;
  padding-left:3%;
  display: inline-block;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
}
header, header a, nav, nav a{
  color: #ffffff;
  text-decoration:none;
}
header div{
  width: fit-content;
  display: inline-block;
}
div.log{
  float: right;
  margin-top:19px;
}
header div img{
  vertical-align: middle;
}
header div span {
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
  
}
/* 
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/html.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.hero-text button:hover {
  background-color: #555;
  color: white;
} */
</style>
