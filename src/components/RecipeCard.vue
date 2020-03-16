<template>
    <router-link :to="{name:'recipe-show', params: {id: recipe.id} }">


    <div class="card card-blog">
        <div class="card-image">
            <a href="#pablo">
                <img class="img" :src="recipe.image">
            </a>
        </div>
        <div class="card-body">
            <h4 class="card-title">
                {{ recipe.title }}
            </h4>
            <div class="card-description">
                {{recipe.description}}
            </div>
            <hr>
            <div class="card-footer">
                <div class="author">
                    <a href="#pablo">
                        <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjM1MzgxMl5BMl5BanBnXkFtZTcwNDI0NDE5NQ@@._V1_UY256_CR4,0,172,256_AL_.jpg" alt="..." class="avatar img-raised">
                        <span>{{ recipe.author}}</span>
                    </a>
                </div>
                <div class="stats">
                    <i class="fa fa-clock-o" aria-hidden="true"></i> Servings: {{ recipe.serving }}
                </div>
            </div>
        </div>
    </div>
    </router-link>
</template>
<script>
    export default {
        methods: {
            showRecipe(id) {
                console.log('Click Event for showRecipe');
                this.$router.push({ name: 'recipe-show', params: {id: id, title: 'Breakfast'} })
            }
        },
        props: {
            recipe: Object
        }
    }
</script>
<style scoped>
    .recipe-card {
        height: auto;
        max-height: min-content;
    }
</style>
