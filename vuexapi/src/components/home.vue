<template>
<div>
  <div class="container">
    <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isLoaded">
          <button @click="orderByName = !orderByName">Click Me</button>
        </tr>
        <tr v-for="beer in filteredBeers" :key="beer.id">
          <td>{{ beer.id }}</td>
          <router-link :to="{ path: `/about/${beer.id}`}">{{beer.name}}</router-link>
          <td>{{ beer.price }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <router-view></router-view> -->
    </div>
  </div>
  </div>


</template>

<script>
const _ = require("lodash");

import { mapState } from "vuex";
export default {
  name: "home",

  data() {
    return {
      filter: "test",
      currentPage: 1,
      orderByName: false,
      goTodetail: ""

      // filteredBeers: []
    };
  },
  mounted() {
    this.$store.dispatch("loadCoins");
    // this.test();
  },
  created() {},
  computed: {
    ...mapState(["beers", "isLoaded"]),
    consoleMyLog() {
      return this.isLoaded;
    },
    filteredBeers() {
      return [
        ...(this.orderByName
          ? _.orderBy(this.toBeShown, "name", "asc")
          : this.toBeShown)
      ];
    },
    toBeShown() {
      return [...this.beers.slice(0, this.currentPage * 5)];
    }
  },
  methods: {
    test() {
      return [
        ...(this.beers ? _.orderBy(this.coins, "name", "asc") : this.coins)
      ];
    }
  },
  goTodetail(prodId) {
    let proId = prodId;
    this.$router.push({ name: "about", params: { Pid: proId } });
  }
};
</script><template>
<div>
  <div class="container">
    <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isLoaded">
          <button @click="orderByName = !orderByName">Click Me</button>
        </tr>
        <tr v-for="beer in filteredBeers" :key="beer.id">
          <td>{{ beer.id }}</td>
          <router-link :to="{ path: `/about/${beer.id}`}">{{beer.name}}</router-link>
          <td>{{ beer.price }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <router-view></router-view> -->
    </div>
  </div>
  </div>


</template>

<script>
const _ = require("lodash");

import { mapState } from "vuex";
export default {
  name: "home",

  data() {
    return {
      filter: "test",
      currentPage: 1,
      orderByName: false,
      goTodetail: ""

      // filteredBeers: []
    };
  },
  mounted() {
    this.$store.dispatch("loadCoins");
    // this.test();
  },
  created() {},
  computed: {
    ...mapState(["beers", "isLoaded"]),
    consoleMyLog() {
      return this.isLoaded;
    },
    filteredBeers() {
      return [
        ...(this.orderByName
          ? _.orderBy(this.toBeShown, "name", "asc")
          : this.toBeShown)
      ];
    },
    toBeShown() {
      return [...this.beers.slice(0, this.currentPage * 5)];
    }
  },
  methods: {
    test() {
      return [
        ...(this.beers ? _.orderBy(this.coins, "name", "asc") : this.coins)
      ];
    }
  },
  goTodetail(prodId) {
    let proId = prodId;
    this.$router.push({ name: "about", params: { Pid: proId } });
  }
};
</script>