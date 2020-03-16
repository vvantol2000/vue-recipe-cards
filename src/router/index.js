import Vue from "vue";
import VueRouter from "vue-router";
import CreateRecipe from "../views/CreateRecipe.vue";
import RecipeList from "../views/RecipeList.vue";
import RecipeShow from "../views/RecipeShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:id",
    name: "recipe-show",
    component: RecipeShow,
    props: true
  },
  {
    path: "/recipe/create",
    name: "recipe-create",
    component: CreateRecipe
  },
  {
    path: "/",
    name: "recipe-list",
    component: RecipeList,
    props: true
  },

];

const router = new VueRouter({
  routes
});

export default router;
