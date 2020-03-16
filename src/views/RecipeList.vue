<template>
  <div>
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
  import axios from 'axios';
  import RecipeCard from "../components/RecipeCard";

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
  async created() {
    try {
      const recipes = await axios.get(' http://localhost:3000/recipe');
      const {data} = recipes;
      this.recipes = data
    } catch (e) {
      console.error(e)
    }
  }
};
</script>
<style scoped></style>
