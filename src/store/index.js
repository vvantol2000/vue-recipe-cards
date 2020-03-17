import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    recipe: {},
  },
  mutations: {
    ADD_RECIPE(state) {
      console.log(state)
    }
  },
  actions: {},
  modules: {}
});
