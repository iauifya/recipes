<template>
  <router-view />
</template>

<script setup>
// name: 'RecipesApp';
// import { onMounted } from "vue";
// import { useStore } from "vuex";
// const store = useStore();

// onMounted(() => {
//   //在页面加载时读取sessionStorage里的状态信息
//   if (sessionStorage.getItem("store") ) {
//       store.replaceState(Object.assign({}, store.state,JSON.parse(sessionStorage.getItem("store"))))
//   } 

//   //在页面刷新时将vuex里的信息保存到sessionStorage里
//   window.addEventListener("beforeunload",()=>{
//       sessionStorage.setItem("store",JSON.stringify(store.state))
//   })

// })
</script>
<style>
  body {
    min-height: 100vh;
    background: #ecf2c2 !important;
    
  }
  body,
  html {
    margin: 0;
    padding: 0;
  }
</style>
