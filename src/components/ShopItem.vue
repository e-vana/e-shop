<template>
  <div>
    <div class="item-card">
      <img :src="itemPictureUrl" alt="">
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
    itemId: String,
    itemPictureUrl: String
  },
  methods: {
    addToCart: function() {
      console.log("clicky")
      var payload = {
        itemName: this.itemName,
        itemPrice: this.itemPrice,
        itemId: this.itemId,
        itemPictureUrl: this.itemPictureUrl
      }
      this.$store.commit("addToCart", payload);
    }
  }
}
</script>
<style scoped>
  .item-card {
    width: 250px;
    background-color: white;
    /* border: 1px solid black; */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.153);
    margin: 10px 10px 10px 10px;
    /* margin: 15px; */
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


