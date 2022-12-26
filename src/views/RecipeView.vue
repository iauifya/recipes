<template>
  <div id="recipe" class="container-fluid pt-5">
    <div class="row">
      <div class="col-lg-8 col-md-12">
        <div class="card recipe">
          <div class="outline">
            <!-- <router-link to="/">&lt; back</router-link> -->
            <h2 class="title">{{ recipe.title }}</h2>
            <p class="mt-4">{{ recipe.descripe }}</p>
            <!-- <p>{{recipe.ingrediens[0]}}</p> -->
            <hr />
            <div class="row">
              <div class="col-md-4">
                <div class="ingrediens">
                  <h4 class="title mb-2">Ingrediens</h4>
                  <ul>
                    <li v-for="(ingredien, i) in recipe.ingrediens" :key="i">
                      {{ ingredien }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-8">
                <div class="methods">
                  <h4 class="title mb-2">Methods</h4>
                  <ol>
                    <li v-for="(method, i) in recipe.methods" :key="i">
                      <span>{{ method }}</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="imgBox imgFluid" :style="{ backgroundImage: `url(${recipe.image})` }">
        </div>
        <router-link to="/">
          <button class="btn mt-3 mb-2">ALL RECIPES</button>
        </router-link>
      </div>
    </div>

    <div class="hero-md"></div>
  </div>
</template>

<script setup>
// import axios from 'axios';
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router'
const store = useStore();
const route = useRoute();
// @ is an alias to /src
// name: "RecipeView",
const recipe = computed(() => {
  return store.state.recipes.find(
    recipe => recipe.slug === route.params.slug
  )
  
})
console.log(recipe);
onMounted(()=>{
  store.dispatch('INIT_RECIPES');
  // store.dispatch('ADD_RECIPE');
});
// export default {
//   name: "RecipeView",
//   computed: {
//     recipe() {
//       return this.$store.state.recipes.find(
//         recipe => recipe.slug === this.$route.params.slug
//       );
//     }
//   },
  
// };
</script>
<style src="../assets/css/style.css" scoped></style>
<style src="../assets/css/recipes.css" scoped></style>

