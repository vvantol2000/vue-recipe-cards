<template>
    <div class="row" id="create">
        <div class="image image-container">
            <img class="card-image image" src="https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80">
        </div>
        <div class="col-md-4">
            <h1 class="title"> Create Recipe </h1>
            <form @submit.prevent="createRecipe">
                <h2>Recipe Title</h2>

                <div>
                    <label>Title</label>
                    <input type="text"
                           value=""
                           v-model="recipe.title"
                           placeholder="Add the recipe title here...."
                           autocomplete="off">
                </div>
                <h2>Who is the Author?</h2>

                <div>
                    <label>Author</label>
                    <input type="text"
                           value=""
                           v-model="recipe.author"
                           placeholder="Add the author here...."
                           autocomplete="off">
                </div>

                <div>
                    <label>Description</label>
                    <input type="text"
                           value=""
                           v-model="recipe.description"
                           placeholder="Add the recipe title here...."
                           autocomplete="off">
                </div>
                <div>
                    <label>Time</label>
                    <input type="text"
                           value=""
                           v-model="recipe.time"
                           placeholder="Add the recipe title here...."
                           autocomplete="off">
                </div>
                <div>
                    <label>Directions</label>
                    <input type="text"
                           value=""
                           v-model="recipe.directions"
                           placeholder="Add the directions...."
                           autocomplete="off">
                </div>
                <div>
                    <label>Ingredients</label>
                    <input type="text"
                           value=""
                           v-model="recipe.ingredients"
                           placeholder="Add the ingredients....">
                </div>
                <div>
                    <label>Image</label>
                    <input type="file"
                           @change="recipe.image">
                </div>
                <input type="submit" class="button" value="Submit">
            </form>

        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                recipe: this.createCleanRecipe()
            }
        },
        methods: {
            createRecipe() {
              this.$store.dispatch('createRecipe', this.recipe).then(() =>{
                  this.$router.push({
                     name: 'recipe-show',
                     params: { id: this.recipe.id }
                  });
                  this.recipe = this.createCleanRecipe();
              })
            },
          createCleanRecipe() {
              const id = Math.floor(Math.random() * 100000);

              return {
                  id: id,
                  title: '',
                  author: '',
                  description: '',
                  time: '',
                  directions: '',
                  ingredients: '',
                  image: '',
              }
          }
        },
        computed: {

        }
    }
</script>
<style scoped>

    #create {
    }
</style>