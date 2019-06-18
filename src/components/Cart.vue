<template>
  <div class="cart-container">
    <div class="cart-container-header">
      <h1>Cart</h1>
      <button @click="minimizeCart()">Hide Cart</button>
    <hr>
    </div>

    <ul>
      <li class="li-container" v-for="(item, index) in cartItems" v-bind:key="item.id">{{ item.itemName }} ${{ item.itemPrice }}
        <button @click="removeFromCart(index)">Remove</button>
        <hr>
      </li>
    </ul>
    <h3>Total ${{ cartTotal }} </h3>
    <button @click="clearCart();">Clear Cart</button>
    <button>Checkout</button>

  </div>
  
</template>
<script>
export default {
  name: 'Cart',
  methods: {
    removeFromCart: function(index){
      this.$store.commit("removeItemFromCart", index);
    },
    clearCart: function(){
      console.log("clicky")
      this.$store.commit("clearCart");
    },
    minimizeCart: function(){
      this.$store.commit("minimizeCart");
    }
  },
  computed: {
    cartItems () {
      return this.$store.getters.cartItems;
    },
    cartTotal () {
      var sum = 0;
      var i;
      for(i=0; i < this.$store.getters.cartItems.length; i++){
        sum = sum + this.$store.getters.cartItems[i].itemPrice;
      }
      return sum;
    }
  }
}
</script>
<style scoped>
.cart-container {
  padding: 20px 0px;
}

hr {
  margin: 10px 0px;
}


.cart-container li {
  list-style: none;
  padding: 5px 0px;
}
.cart-container button {
  margin: 0px 5px 0px 0px;
  padding: 10px;
  border: none;
}


.li-container li {
  display: flex;
  align-items: center;
  margin: 0px 10px 0px 0px;
  justify-content: space-between;
}
.li-container hr {
  border: 1px dashed rgba(114, 114, 114, 0.178);
  width: 100%;
}
</style>


