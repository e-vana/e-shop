<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>
<script>

import navbar from '@/components/Navbar.vue'
export default {
    components: {
    navbar
  }
}
</script>

<style>

* {
  padding: 0px;
  margin: 0px;
  font-family: 'Quicksand', sans-serif;
}

</style>
