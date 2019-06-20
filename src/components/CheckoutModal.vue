<template>
  <transition name="modal-fade">
    <div class="modal-container">

      <div class="modal-backdrop" @click="close()"></div>

      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
        <h1>Checkout </h1>
        <hr>
        
        <div  class="cart-item-container" v-for="(item, index) in cartItems" v-bind:key="item.itemId">
          <div class="cart-item">
            <div class="cart-item-container-header">
              <h3>{{ item.itemName }}</h3>
              <h3>${{ item.itemPrice }}</h3>
            </div>
            <div class="cart-item-container-footer">
              <img :src="item.itemPictureUrl" width="50px" alt="">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
            <hr>
          </div>
        </div>



        <div class="checkout">
          <h3>Total ${{ cartTotal }} </h3>
          <p v-if="!picked">+ Shipping & Handling</p>
          <p v-if="picked"> Shipped </p>
        </div>

        <div class="shipping-type">
          <h2>Shipping Type</h2>
          <hr>
          <input type="radio" id="one" value="EC" v-model="picked">
          <label for="one">Ground Economy + $9.99</label>
          <br>
          <input type="radio" id="two" value="EX" v-model="picked">
          <label for="two">Ground Expedited + $18.99</label>
          <br>
          <!-- <p>{{ picked }}</p> -->
        </div>

        <div>
          <h2>Shipping Information</h2>
          <hr>
          <label for="">Name</label>
          <br>
          <input type="text" v-model="shippingName">
          <br>
          <label for="">Address</label>
          <br>
          <input type="text" v-model="shippingAddress">
          <br>
          <label for="">Address Continued</label>
          <br>
          <input type="text" v-model="shippingAddress2">
          <br>
          <label for="">State</label>
          <br>
          <input type="text" v-model="shippingState">
          <br>
          <label for="">City</label>
          <br>
          <input type="text" v-model="shippingCity">
          <br>
          <label for="">Zip Code</label>
          <br>
          <input type="text" v-model="shippingZip">
          <br>
          <button @click="billingIsShipping">My billing information is the same as my shipping.</button>
        </div>

        <div>
          <h2>Billing Information</h2>
          <hr>
          <label for="">Name</label>
          <br>
          <input type="text" v-model="billingName">
          <br>
          <label for="">Address</label>
          <br>
          <input type="text" v-model="billingAddress">
          <br>
          <label for="">Address Continued</label>
          <br>
          <input type="text" v-model="billingAddress2">
          <br>
          <label for="">State</label>
          <br>
          <input type="text" v-model="billingState">
          <br>
          <label for="">City</label>
          <br>
          <input type="text" v-model="billingCity">
          <br>
          <label for="">Zip Code</label>
          <br>
          <input type="text" v-model="billingZip">
        </div>

      </div>
    </div>

  </transition>
</template>
<script>
import store from '../store'
export default {
  name: 'checkoutModal',
  data(){
    return {
      shippingName: '',
      shippingAddress: '',
      shippingAddress2: '',
      shippingState: '',
      shippingCity: '',
      shippingZip: '',
      billingName: '',
      billingAddress: '',
      billingAddress2: '',
      billingState: '',
      billingCity: '',
      billingZip: '',
      picked: '',
      ecValue: 10,
      exValue: 19
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    billingIsShipping(){
      this.billingCity = this.shippingCity;
      this.billingName = this.shippingName;
      this.billingAddress = this.shippingAddress;
      this.billingAddress2 = this.shippingAddress2;
      this.billingZip = this.shippingZip;
      this.billingState = this.shippingState;
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
      if(this.picked == 'EX'){
        return sum + this.exValue;
      } else if(this.picked == 'EC'){
        return sum + this.ecValue;
      } return sum
    }
  }
};
</script>
<style scoped>


.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease
}


.cart-item-container-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart-item-container-footer {
  margin: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
}

.cart-item-container-footer p{
  margin: 0px 0px 0px 10px;
}
.cart-item-container hr {
  border: 1px dashed rgba(114, 114, 114, 0.178);
  width: 100%;
}
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
}
.modal-fade {
  transition: all .5s ease-in;
  
}
.modal {
  margin-top: 400px;
  position: absolute;
  background: #FFFFFF;
  overflow-x: auto;
  width: 800px;
  height: 700px;
  color: black;
  border-radius: 5px;
  z-index: 50;
  padding: 50px;
}

.checkout {
  text-align: right;
}

input[type=text]{
  width: 100%;
  padding: 10px;
  margin: 0px 5px 20px 0px;
  border-radius: 4px;
  border: 1px solid rgb(233, 233, 233);
  font-size: 16px;
}
input {
  box-sizing: border-box
}

hr {
  margin: 10px 0px;
}

.shipping-type {
  margin: 0px 0px 20px 0px;
}
button {
  margin: 10px 5px 20px 0px;
  padding: 10px;
  border: none;
}
</style>