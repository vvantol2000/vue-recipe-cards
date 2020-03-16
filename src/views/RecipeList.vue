<template>
  <div>
    <h1>Recipe Cards</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
            <RecipeCard :id="id" />
        </div>
          <div class="col-md-4">
              <RecipeCard :id="id" />
          </div>
          <div class="col-md-4">
              <RecipeCard :id="id" />
          </div>
      </div>


    </div>
  </div>
</template>
<script>
import RecipeCard from "../components/RecipeCard";
export default {
  components: {
    RecipeCard
  },
  props: ["id"]
};
</script>
<style scoped></style>
