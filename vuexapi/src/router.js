import Vue from "vue";
import Router from "vue-router";
import About from "@/components/About.vue";
import Home from "@/components/home.vue";
import Randomize from "@/components/randomize.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/about/:id",
      name: "about",
      component: About
      // props:true
    },

    {
      path: "/",
      name: "home",
      component: Home
      // props:true
    },

    {
      path: "/randomize/",
      name: "Randomize",
      component: Randomize
      // props:true
    }
  ]
});
