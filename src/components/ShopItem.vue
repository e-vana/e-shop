<template>
  <div>
    <div class="item-card">
      <img src="https://via.placeholder.com/200/200" alt="">
      <h2>{{ itemName }}</h2>
      <p>${{ itemPrice }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopItem',
  props: {
    itemName: String,
    itemPrice: Number,
    itemId: String
  },
  methods: {
    addToCart: function() {
      console.log("clicky")
      var payload = {
        itemName: this.itemName,
        itemPrice: this.itemPrice
      }
      this.$store.commit("addToCart", payload);
    }
  }
}
</script>
<style scoped>
  .item-card {
    width: 250px;
    /* border: 1px solid black; */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.153);
    margin: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
  }
  .item-card img {
    width: 100%;
    object-fit: cover;
    
  }
  .item-card button {
    padding: 10px;
    border: none;
  }
</style>


