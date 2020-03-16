<template>
    <nav class="navbar navbar-expand-lg bg-info">
    <div class="container">
        <router-link to="/" class="navbar-brand">Recards</router-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar"></span>
            <span class="navbar-toggler-bar"></span>
            <span class="navbar-toggler-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link :to="{name: 'recipe-create'}" class="nav-link">
                        Create
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
    export default {
        data() {
            return {
                add: {}
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>