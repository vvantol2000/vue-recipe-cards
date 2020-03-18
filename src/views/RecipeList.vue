<template>
  <div id="recipe-list">
    <h1>Recipe Cards</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="recipe in recipes" :key="recipe.id" >
            <RecipeCard :recipe="recipe" />
        </div>
          
      </div>


    </div>
  </div>
</template>
<script>
  // import RecipeService from "../services/RecipeService";
  import RecipeCard from "../components/RecipeCard";
  import { mapGetters } from 'vuex'
  export default {
  data() {
    return {
      recipes: []
    }
  },
  components: {
    RecipeCard
  },
  props: ["id"],
    computed: {
      ...mapGetters([

      ])
    },
    methods: {
     // fetchRecipes() {
     //   this.$store.dispatch('fetchRecipe', this.recipes)
     // }
    },
  created() {
    this.$store.dispatch('fetchRecipe');
    this.recipes = this.$store.state.recipes
    //this.recipes = this.fetchRecipes()

    // try {
    //   const recipes = await RecipeService.getRecipes();
    //   const {data} = recipes;
    //   this.recipes = data
    // } catch (e) {
    //   console.error(e)
    // }
  }
};
</script>
<style scoped>
  #recipe-list {
    margin-top: 40px;
  }
</style>
