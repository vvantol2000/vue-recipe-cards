<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top recipe-card" src="https://www.crazyforcrust.com/wp-content/uploads/2017/03/Chocolate-French-Toast-Bake-7-of-9.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary" @click="showRecipe(id)">Go somewhere</a>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: ''
            }
        },
        methods: {
            showRecipe(id) {
                console.log('Click Event for showRecipe');
                this.$router.push({ name: 'recipe-show', params: id })
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
