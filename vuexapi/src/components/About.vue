<template>
  <div class="about">
       <div
      v-for="(value,index) in selectedArticle"
      :key="index"
      class="row"
    >
      
  
 

  {{value.name}}
       </div>
       <!-- <router-view></router-view> -->
  </div>
</template>


<script>
const _ = require("lodash");

import { mapState } from "vuex";
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "about",
    props:{
      //  proId: this.$route.params.Pid,

  },
  components: {
    // HelloWorld
  },
  data() {
    return {
        article:"",
      //  proId: this.$route.params.Pid,


    };
  },
  computed: {
    // return the beers obj filter it by id and match it with route_id
    selectedArticle(){
      return this.$store.state.beers.filter(beer => beer.id == this.$route.params.id);
    }
  },
  mounted(){
    this.article = this.$store.getters.getBeersById(this.beersId)
      //My obj beers
      console.log(this.$store.state.beers);
      //The id for each beer...
      console.log(this.$route.params.id);

  }

  
};
</script>