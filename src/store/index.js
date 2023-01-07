import { createStore } from "vuex";

const LS ={
  load(){
    return JSON.parse(localStorage.getItem('vue-recipes') || '[]') //讀資料，也要考慮有可能讀不到的情況|| '[]'   用JSON.parse()把陣列轉成字串
  },
  save(data){
    localStorage.setItem('vue-recipes',JSON.stringify(data)) //(存在哪裡,存什麼資料)
  }
}
export default createStore({
  strict: true,
  state: {
    recipes: [
      {
        slug: "chicken-vesuvio",
        title: "Chicken Vesuvio",
        descripe:
          "Chicken Vesuvio is a one-pan dish that starts on the stove and finishes in the oven. It's made with browned chicken-on-the-bone pieces, roasted with garlic, onion, and Yukon gold potato wedges soaked in white wine sauce. Serve with the lovely pan sauce and peas. Once an economic meal named for Mt. Vesuvio near Naples, it has turned into a signature Chicago dish that you'll absolutely love!",
        ingrediens: [
          "1/2 cup olive oil",
          "5 cloves garlic, peeled",
          "2 large russet potatoes, peeled and cut into chunks",
          "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
          "3/4 cup white wine",
          "3/4 cup chicken stock",
          "3 tablespoons chopped parsley",
          "1 tablespoon dried oregano",
          "Salt and pepper",
          "1 cup frozen peas, thawed"
        ],
        methods: [
          "1.Preheat the oven to 400 degrees F (200 degrees C). Dry chicken pieces well and season liberally with salt and pepper.",
          "2.Heat olive oil in an oven-safe skillet over medium heat. Add chicken, skin-side down, and cook until skin is crisp, 5 to 7 minutes. Turn over and cook until golden brown on the other side, 4 to 5 more minutes. Remove chicken and set aside.",
          "3.Add potatoes, onion, and garlic to the skillet and cook until onion is translucent and potato wedges start to brown nicely on cut sides, 5 to 7 minutes. Remove vegetables from the skillet and set aside.",
          "4.Pour wine into the skillet and cook until reduced by 1/2 while scraping the browned bits of food off the bottom of the pan with a wooden spoon.",
          "5.Add potatoes, onion, and garlic back into the skillet. Stir in chicken stock, parsley, and Italian seasoning. Add chicken pieces on top; cover with an oven-safe lid.",
          "6.Cook in the preheated oven until chicken is cooked through and no longer pink at the bone, about 45 minutes. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C).",
          "7.Return the skillet to the stove and remove chicken and vegetables, leaving the liquid; bring to a simmer. Add butter and stir until smooth, about 5 minutes. Season with salt and pepper to taste. Add peas and cook 1 to 2 minutes longer. Serve chicken atop potato wedges and garnish with pan sauce and peas."
        ],
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/04/05/KC2802_Classic-Chicago-Chicken-Vesuvio_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1617635869428.jpeg"
      },
      {
        slug: "chicken-liver-pate",
        title: "Chicken Liver Pâté",
        descripe:
          "Here’s an easy chicken liver pâté recipe with shallots, garlic, brandy, capers and thyme, blended smooth to spread on bread or crackers. A hit at parties!",
        ingrediens: [
          "8 oz. chicken livers, cleaned",
          "4 cups chicken stock",
          "2 tbsp. rendered chicken fat or unsalted butter",
          "½ medium yellow onion, minced",
          "1½ tbsp. cognac or brandy",
          "2 hard-boiled eggs",
          "Kosher salt and freshly ground black pepper, to taste",
          "Toast points, for serving"
        ],
        methods: [
          "1.Trim any fat or connective tissue from the livers and discard.",
          "2.Heat 2 tablespoons of the butter in a large sauté pan on medium heat and let the butter brown, about 3 to 5 minutes. Do not let it burn.",
          "3.Add the shallots and sauté for 1 minute. Add the livers. Be sure to space them well in the pan so they can brown more easily. Sprinkle salt over the livers. Flip the livers when one side browns, about 2 minutes.",
          "4.Once the livers have browned, add the capers, thyme, garlic, and anchovy paste if using, and sauté another minute.",
          "5.Take the pan off the heat and add the brandy. (Be careful when you return it to the heat, as it could flame up, especially if you are using a gas range. If it does, cover the pan for a moment.) Increase the heat to high and let the brandy boil and reduce to the consistency of syrup, about 1 to 2 minutes. Turn off heat and allow the mixture to cool.",
          "6.Put the mixture into a food processor or blender and pulse a few times to combine. Add the remaining butter and the cream and purée. The mixture will look a little loose, but it will firm up in the fridge.",
          "7.Pack the pâté into ramekins or a small bowl, cover and refrigerate for at least an hour before using.The pâté will last a week or so in the fridge. If you want to preserve it for up to a month, pour a little melted lard or clarified butter on top to seal. Each time you dip into the pâté, you will need to reseal the top to preserve it.Serve spread on crackers or baguette slices."
        ],
        image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F21033E2-79A6-4CEE-9DF8-164D5D2F5731/Derivates/A3301ACD-1E53-46DC-8271-8F9AF2725AA1.jpg"
      },
      {
        slug: "cheesy-nooch-nacho-topper",
        title: "CHEESY NOOCH NACHO TOPPER",
        descripe:
          "This is a recipe for a quick and easy homemade vegan Cheese Sauce. Give this Nooch Cheese Sauce (made with Nutritional Yeast) a try because it’s perfect for lasagne, pizza, mac & cheese or as a dip for tortilla chips! It’s also nut-free and you don’t need a blender!",
        ingrediens: [
          "180ml Oat milk",
          "3 tbsp Cheese nooch",
          "2 tbsp Tapioca flour",
          "1/4 tsp Salt",
          "1/2 tsp Onion powder",
          "1/4 tsp Garlic powder",
          "1/2 tsp Smoke paprika",
          "1/4 tsp Orange food colouring (not essential but adds great colour!)"
        ],
        methods: [
          "1.Whisk all the ingredients together in a saucepan and heat gently on a low heat whisking/stirring all the time.",
          "2.After 5 minutes or so the tapioca flour will start to thicken the mixture and you’ll start getting a shiny stringy mix that resembles nacho sauce. Can be used as a dip but also great on top of chilli nachos."
        ],
        image: "https://cdn.pixabay.com/photo/2017/11/26/19/40/nachos-2979802_960_720.jpg"
      }
    ]
  },
  mutations: {
    SET_RECIPES(state){
       //把data傳入state.recipes
      //save LS
      LS.save(state.recipes);
    },
    ADD_RECIPE(state, data) {
      state.recipes.push(data);
      LS.save(state.recipes);
    },
    DELETE_RECIPE(state,recipe){
      state.recipes = state.recipes.filter((r)=> r !== recipe) 
      // state.recipes.splice(index-1,1);
      LS.save(state.recipes);
    }
  },
  actions: {
    INIT_RECIPES({commit}){
      //load LS
      commit('SET_RECIPES',LS.load())
    }
    // NEW_RECIPES({commit}){
    //   commit('ADD_RECIPE',LS.load())
    // }
  },
  modules: {}
});
