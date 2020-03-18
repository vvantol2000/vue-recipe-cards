import Vue from "vue";

import Vuex from "vuex";

import RecipeService from "../services/RecipeService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      { id: 1, name: "John Brown" },
      { id: 2, name: "Jane Brown" }
    ],
    recipes: [],
    recipe: {},
    isLoading: false
  },
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
    },
    FETCH_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    FETCH_RECIPE(state, recipe) {
      state.recipe = recipe
    }
  },
  getters: {
    recipe: state => state.recipe,
    recipes: state => {
      return state.recipes;
    }
  },
  actions: {
    async createRecipe({ commit }, recipe) {
      await RecipeService.postRecipe(recipe).then(() => {
        commit("ADD_RECIPE", recipe);
      });
    },
    async fetchRecipes({ commit }) {
      const recipes = await RecipeService.getRecipes();
      commit("FETCH_RECIPES", recipes.data);
    },
    async fetchRecipe({ commit }, id) {
      try {
        const recipe = await RecipeService.getRecipe(id);
        commit("FETCH_RECIPE", recipe.data);
      } catch (e) {
        console.error(e);
      }
      // const recipe = await RecipeService.getRecipe(id);
      // commit('FETCH_RECIPE', recipe)
    }
  },
  modules: {}
});
