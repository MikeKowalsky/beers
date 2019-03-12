<template>
  <div id="app">
    <div class="container">
<router-link tag="li" to="/randomize">
  <a>/foo</a>
</router-link>


   </div>
   <div class="container">
       <home/>
 <router-view></router-view>
   </div>
  </div>
</template>

<script>
import Home from './components/home.vue'
// import About from './components/About.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'app',
  components: {
    Home      // About
  }
}
</script>