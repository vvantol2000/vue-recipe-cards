<template>
    <div>
        <div class="page-header" :style="{backgroundImage: `url(${recipe.image})`}">
            <div class="filter"></div>
            <div class="content-center">
                <div class="container text-center">
                    <h1 class="title ">{{ recipe.title.toUpperCase() }}</h1>
                    <h3>{{ recipe.author }}</h3>
                </div>
            </div>
        </div>
        <div class="features-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">{{ recipe.title}}</h2>
                        <h5 class="description">{{ recipe.description }}</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="ipad-container">
                            <img :src="recipe.image">
                        </div>
                    </div>
                    <div class="col-md-4 offset-1">
                        <div class="info info-horizontal">
                            <div class="icon icon-info">
                                <i class="nc-icon nc-atom" aria-hidden="true"></i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">Time: {{ recipe.time }}</h4>
                                <p>{{ recipe.directions }}</p>
                            </div>
                        </div>
                        <div class="info info-horizontal">
                            <div class="icon icon-success">
                                <i class="nc-icon nc-ruler-pencil" aria-hidden="true"></i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">Servings: {{ recipe.serving }}</h4>
                                <p><span>Ingredients</span>: {{recipe.ingredients}}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import RecipeService from "../services/RecipeService";
    export default {
        data() {
            return {
                recipe: {}
            }
        },
        props: [
            'id'
        ],
        async created() {
            try {
                const recipe = await RecipeService.getRecipe(this.id);
                this.recipe = recipe.data
            } catch (e) {
                console.error(e);
            }

        }
    }
</script>
