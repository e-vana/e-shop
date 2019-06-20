<template>
  <div class="cart-container">
    <div class="cart-container-header">
      <h1>Cart</h1>
      <hr>
    </div>

    <transition-group name="fade" mode="out-in">
      <div  class="cart-item-container" v-for="(item, index) in cartItems" v-bind:key="item.itemId">
        <div class="cart-item">
          <div class="cart-item-container-header">
            <h3>{{ item.itemName }}</h3>
            <h3>${{ item.itemPrice }}</h3>
          </div>
          <div class="cart-item-container-footer">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button v-if="!checkoutClicked" @click="removeFromCart(index)">Remove</button>
          </div>
          <hr>
        </div>
      </div>
    </transition-group>
    
    <!-- <transition name="fade"> -->
      <div v-if="checkoutClicked" class="cart-checkout">
        <h1>Checkout</h1>
        <hr>
        <!-- <h3>Payment Method</h3>
        <button>Pay with Credit Card</button>
        <button>Pay with Paypal</button> -->
        <label for="">Credit Card Number</label>
        <input type="text" placeholder="1111-2222-3333-4444">
        <label for="">Credit Card Holder</label>
        <input type="text" placeholder="John Doe">
        <label for="">Security Code</label>
        <input type="text" placeholder="123">


      </div>
    <!-- </transition> -->

    <div class="checkout">
      <h3>Total ${{ cartTotal }} </h3>
      <p v-if="this.$store.getters.cartItems.length > 0">+ Shipping & Handling</p>
      <button v-if="!checkoutClicked" @click="clearCart();">Clear Cart</button>
      <button v-if="!checkoutClicked && this.$store.getters.cartItems.length > 0" @click="open()">Checkout</button>
      <button v-if="checkoutClicked" @click="checkoutClicked=false">Cancel</button>

    </div>
  </div>
</template>
<script>
export default {
  name: 'Cart',
  data() { 
    return {
      checkoutClicked: false
    }
  },
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
    },
    checkout: function(){
      this.checkoutClicked = true;
    },
    open(){
      this.$emit('open');
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
/* .fade-leave-active {
  transition: opacity .5s ease-in-out;
} */
.fade-enter-active {
  transition: opacity .7s ease-in-out;
}
.fade-enter-to {
  opacity: 1;

}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: .7s;
  opacity: 0;
}



.cart-container {
  background-color: white;
  padding: 20px;
  margin: 10px 20px 0px 0px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.153);
}

hr {
  margin: 10px 0px;
}


.cart-container li {
  list-style: none;
  padding: 5px 0px;
}
.cart-container button {
  margin: 10px 5px 0px 0px;
  padding: 10px;
  border: none;
}

.cart-item-container-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart-item-container-footer {
  margin: 10px 0px;
}

.cart-item-container hr {
  border: 1px dashed rgba(114, 114, 114, 0.178);
  width: 100%;
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

.checkout {
  text-align: right;
}

.cart-checkout input[type=text]{
  width: 100%;
  padding: 10px;
  margin: 0px 5px 20px 0px;
  border-radius: 4px;
  border: 1px solid rgb(233, 233, 233);
  font-size: 16px;
}
.cart-checkout input {
  box-sizing: border-box
}

@media only screen and (max-width: 640px) {
  .cart-container {
    font-size: 13px;
  }
}
</style>


