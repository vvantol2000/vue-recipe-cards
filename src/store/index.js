import Vue from "vue";
import Vuex from "vuex";
import RecipeService from "../services/RecipeService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {id: 1, name: "John Brown"},
      {id: 2, name: "Jane Brown"},
    ],
    recipes: [],
    // recipe: {},
    isLoading: false,
  },
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe)
    }
  },
  getters: {
    recipe: state => state.recipe,
    recipes: state => {
      return state.recipes
    }
  },
  actions: {
    async createRecipe({commit}, recipe) {
      await RecipeService.postRecipe(recipe).then(() =>{
        commit('ADD_RECIPE', recipe)
      })
    }

  },
  modules: {}
});
