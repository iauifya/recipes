<template>
  <div id="recipeHome" class="container-fluid">
    <div class="home">
      <h1 class="title mt-5">MY RECIPES COLLAGE</h1>
      <button class="btn btn_primary mt-2" @click="togglePopup">
        + NEW RECIPE
      </button>
      <div class="hero-sm"></div>
      <div class="recipes mt-4 mb-5">
        <div class="row">
          <div
            class="col-xl-4 col-md-6 mb_lg"
            v-for="(recipe,index) in $store.state.recipes"
            :key="recipe.slug"
          >
            <div class="card">
              <div class="close point" @click="removeRecipe(recipe)">
                <img src="@/assets/img/icon/close-button.png" alt="" />
              </div>
              <div
                class="imgBox imgFluid"
                :style="{ backgroundImage: `url(${recipe.image})` }"
              >
                <!-- {{recipe.image}} -->
              </div>
              <div class="hero"></div>
              <h2 class="title mb-1 mt-2">{{ recipe.title }}</h2>
              <p class="descripe">{{ recipe.descripe }}</p>
              <div class="btnGroup mt-3">
                <router-link :to="`/recipe/${recipe.slug}`">
                  <button class="btn mt-3 mb-2">view recipe</button>
                </router-link>
                <div>
                  <p>QUICK VIEW</p>
                  <div class="iconItems">
                    <div class="iconBox ing" @click="showIng(recipe)">
                      <img src="@/assets/img/icon/harvest.png" alt="" />
                    </div>
                    <div class="iconBox met" @click="showMet(recipe)">
                      <img src="@/assets/img/icon/requirement.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- 
                <div>
                  <button class="btn mt-3 mr-2" @click="showIng(recipe)">
                    看成分
                  </button>
                  <button class="btn mt-3" @click="showMet(recipe)">
                    看作法
                  </button>
                </div>
               -->
            </div>
          </div>
        </div>
      </div>
      <div v-if="ingOpen" class="mask" @click="hideIng(recipe)"></div>
      <div v-if="ingOpen" class="popupBox">
        <div  class="ingModal popup lower">
          <div class="close point" @click="hideIng(recipe)">
            <img src="@/assets/img/icon/close-button.png" alt="" />
          </div>
          <p v-if="ingrediensLength">Here is no content!</p>
          <ul v-else>
            <li v-for="(ingredien, i) in ingOpen.ingrediens" :key="i">
              {{ ingredien }}
            </li>
          </ul>
        </div>
      </div>
      <div v-if="metOpen" class="mask" @click="hideMet(recipe)"></div>
      <div class="popupBox">
        <div v-if="metOpen" class="metModal popup lower">
          <div class="close point" @click="hideMet(recipe)">
            <img src="@/assets/img/icon/close-button.png" alt="" />
          </div>
          <p v-if="methodsLength">Here is no content!</p>
          <ol v-else>
            <li v-for="(method, i) in metOpen.methods" :key="i">
              {{ method }}
            </li>
          </ol>
        </div>
      </div>

      <div class="mask" @click="togglePopup" v-if="popupOpen"></div>
      <div class="popupBox">
        <div class="add_recipes_modal popup mt-3 mb-5" v-if="popupOpen">
          <form id="newRecipe" @submit.prevent="addRecipe" class="outline">
            <div class="close point" @click="togglePopup">
              <img src="@/assets/img/icon/close-button.png" alt="" />
            </div>
            <div class="form-group mt-3">
              <label>
                <p>Title</p>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="recipe.title"
                />
              </label>
            </div>
            <div class="form-group">
              <label>
                <p>Description</p>
                <textarea class="form-control" v-model.trim="recipe.descripe" />
              </label>
            </div>
            <div class="form-group">
              <label>
                <p>image<span>(please enter URL)</span></p>
                <input class="form-control" v-model.trim="recipe.image" />
              </label>
            </div>
            <div class="form-group">
              <label><p>Ingrediens</p></label>
              <div
                class="inputRows mb-2"
                v-for="i in recipe.ingredienRows"
                :key="i"
              >
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="recipe.ingrediens[i - 1]"
                />

                <div class="addplus point" @click="addIngredient(i)">
                  <img src="@/assets/img/icon/plus.png" alt="" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>
                <p>Methods</p>
              </label>
              <div
                class="inputRows mb-2"
                v-for="i in recipe.methodsRows"
                :key="i"
              >
                <textarea
                  class="form-control"
                  v-model.trim="recipe.methods[i - 1]"
                />
                <div class="addplus point" @click="addMethods(i)">
                  <img src="@/assets/img/icon/plus.png" alt="" />
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn_sm mr-3 my-3">
              + NEW RECIPE
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import axios from 'axios';
import { ref, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
// @ is an alias to /src
// name: "HomeView";
const store = useStore();
const recipe = reactive({
  slug: "",
  title: "",
  descripe: "",
  ingrediens: [],
  methods: [],
  image: "",
  ingredienRows: 1,
  methodsRows: 1
});

const popupOpen = ref(false);

const ingOpen = ref(null);
const metOpen = ref(null);

const togglePopup = () => {
  popupOpen.value = !popupOpen.value;
};

function showIng(recipe) {
  console.log(recipe);
  ingOpen.value = recipe;
}
const ingrediensLength = computed(() => {
  return ingOpen.value.ingrediens.length === 0;
});
function hideIng(recipe) {
  console.log(recipe);
  ingOpen.value = !recipe;
}
function showMet(recipe) {
  console.log(recipe); //reactive proxy
  metOpen.value = recipe;
  // console.log(metOpen); //ref RefImpL
  // console.log(metOpen.value.methods); //console出來又是reactive的proxy物件,如果不加value會出現Undefined
  // console.log(metOpen.value.methods.length); //無的話就是0
}
const methodsLength = computed(() => {
  return metOpen.value.methods.length === 0;
});
function hideMet(recipe) {
  console.log(recipe);
  metOpen.value = !recipe;
}
// const bg_css = computed(() => {
//   console.log(recipe.image);
//   return {
//     backgroundImage:'url(' + recipe.image + ')'
//   }
// })
function addIngredient(i) {
  // console.log(recipe.ingrediens);
  let target = recipe.ingrediens[i - 1];
  console.log(target);
  if (target == undefined) {
    //判斷陣列為空值
    alert("內容不能為空白");
    return;
  }
  recipe.ingredienRows++;
}
function addMethods(i) {
  let target = recipe.methods[i - 1];
  console.log(target);
  if (target == undefined) {
    //判斷陣列為空值
    alert("內容不能為空白");
    return;
  }
  recipe.methodsRows++;
}
function addRecipe() {
  console.log("click");
  recipe.slug = recipe.title.toLowerCase().replace(/\s/g, "-");
  if (!recipe.slug) {
    alert("請輸入標題");
    return;
  }
  store.commit("ADD_RECIPE", { ...recipe }); //資料存入store裡，{...recipe}這邊做法會移除到proxy特性，變成單純的object
  console.log({ ...recipe });
  console.log(`原本的`, recipe);
  Object.assign(recipe, {
    slug: "",
    title: "",
    descripe: "",
    image: "",
    ingrediens: [],
    methods: [],
    ingredienRows: 1,
    methodsRows: 1
  }); //所以這邊不能使用reactive重新賦值，因為已失去proxy特性，無響應性，所以要用Object.assign來重新賦值
  console.log(`透過Object.assign修改的`, recipe);

  togglePopup();
}
function removeRecipe(recipe) {
  if (confirm(`Are you sure you want to delete "${recipe.title}"?`)) {
    store.commit("DELETE_RECIPE", recipe);
  }
}
// onMounted(() => {
//   axios
//     .get("http://localhost:3000")
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// })
// }
onMounted(() => {
  store.dispatch("INIT_RECIPES");
});
</script>
<style src="../assets/css/style.css" scoped></style>
<style src="../assets/css/recipes.css" scoped></style>
