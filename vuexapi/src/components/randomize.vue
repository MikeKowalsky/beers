<template>
  <div class="randomize">
 
    <h1>Hey I am here</h1>
          <p>{{currentBgPath.name}}</p>

    <div v-for="(beer,index) in currentBgPath" :key="index">
      {{beer.name}}

    </div>
    <button @click="randomize()"></button>

  </div>

</template>

<script>
// eslint-disable-next-line
const _ = require("lodash");
// eslint-disable-next-line
import { mapState } from "vuex";
export default {
  name: "Randomize",
  data(){
    return{
      currentBgPath:1,
      // randomize:""
    }
  },

 mounted() {
   
    this.$store.dispatch("loadCoins");
    this.randomize;
    
    // this.test();
   
  
  },
   computed: {
    ...mapState(["beers", "isLoaded"]),
    consoleMyLog() {
      return this.isLoaded;
    },
   
  
   },
    methods:{
    randomize(){
        var random = Math.floor(Math.random() * this.$store.state.beers.length);
      console.log(random);
      this.currentBgPath = this.$store.state.beers[random];
      console.log(
        "Yo i am a random beer",
        (this.currentBgPath = this.$store.state.beers[random])
      );
      }
  
    }



}


</script>