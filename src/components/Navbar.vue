<template>
  <div class="navbar">
    <h1>Vue / Vuex Simple Shopping Cart</h1>
  </div>


</template>
<script>
export default {
  name: 'Navbar'
}
</script>
<style scoped>

.navbar {
  /* width: 100vw; */
  height: 100%;
  background-color:white;
  padding: 20px;
  font-weight: lighter;
  letter-spacing: 5px;
  text-align: center;
}

@media only screen and (max-width: 660px) {
  .navbar {
    font-size: 14px;
  }
}
</style>


