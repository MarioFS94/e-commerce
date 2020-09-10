import Vue from 'vue'
import Vuex from 'vuex'
import json from "@/assets/db.json";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      json
    },
    mutations: {},
    actions: {}
  })

export default store