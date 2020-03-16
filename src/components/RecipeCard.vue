<template>
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
                        <span>{{ recipe.editor}}</span>
                    </a>
                </div>
                <div class="stats">
                    <i class="fa fa-clock-o" aria-hidden="true"></i> Servings: {{ recipe.serving }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '',
                recipe: {
                    id: 23,
                    title: 'Chocolate French Toast Casserole',
                    description: 'Chocolate French Toast Casserole - this easy overnight french toast recipe is full of ' +
                        'chocolate from the milk to the chocolate chips! It\'s the perfect indulgent brunch recipe!',
                    vote: 0,
                    yield: 0,
                    serving: 0,
                    image: 'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/q/2000/quick_and_easy_french_toast_new_2000x1125.jpg',
					editor: 'Mike Johns'

                }
            }
        },
        methods: {
            showRecipe(id) {
                console.log('Click Event for showRecipe');
                this.$router.push({ name: 'recipe-show', params: {id: id, title: 'Breakfast'} })
            }
        },
        props: [' id ']
    }
</script>
<style scoped>
    .recipe-card {
        height: auto;
        max-height: min-content;
    }
</style>
