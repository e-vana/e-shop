<template>
  <div class="home">
    <div class="home-container">
      <!-- <div class="item-container" v-bind:class="[ width: isCartMinimized  ? '100vw' : '80vw']" > -->
      <!-- <div class="item-container" v-bind:class="{isMinimized: isCartMinimized}" > -->
      <div class="item-container">


        <shopItem itemName="Item#1" :itemPrice="44" itemId="1"/>
        <shopItem itemName="Item#1" :itemPrice="44" itemId="1"/>
        <shopItem itemName="Item#2" :itemPrice="22" itemId="2"/>
        <shopItem itemName="Item#2" :itemPrice="22" itemId="2"/>
        <shopItem itemName="Item#2" :itemPrice="22" itemId="2"/>
        <shopItem itemName="Item#2" :itemPrice="22" itemId="2"/>
        <shopItem itemName="Item#2" :itemPrice="22" itemId="2"/>
        <shopItem itemName="Item#2" :itemPrice="22" itemId="2"/>
        <shopItem itemName="Item#2" :itemPrice="22" itemId="2"/>
        <shopItem itemName="Item#2" :itemPrice="22" itemId="2"/>
        <shopItem itemName="Item#2" :itemPrice="22" itemId="2"/>
        <shopItem itemName="Item#2" :itemPrice="22" itemId="2"/>


      </div>
      <!-- <div class="cart-container" v-bind:class="{isMinimizedCart: isCartMinimized}"> -->
      <div class="cart-container">

        <p>{{ isCartMinimized }}</p>

        <transition name="fade">
          <cart v-if="!this.$store.getters.cartMinimized"/>
          <button v-if="this.$store.getters.cartMinimized" @click="minimizeCart()">Show Cart</button>
        </transition>
      </div>


    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import shopItem from '@/components/ShopItem.vue'
import cart from '@/components/Cart.vue'
export default {
  name: 'home',
  components: {
    shopItem,
    cart
  },
  data() { 
    return {
      itemContainerVW: '',
      cartContainerVW: '',
      isCartMinimized: true,
    }
  },
  methods: {
    minimizeCart: function(){
      this.$store.commit("minimizeCart");
    },
  },
  computed: {
    cartMinimizedState: function(){
      return this.$store.getters.cartMinimized;
    }
  },
  watch: {
      cartMinimizedState: {
          handler () {
            console.log("changed");
            this.cartMinimizedState();
          },
          deep: true
      }
  }


}
</script>
<style scoped>

.isMinimized {
  width: 95vw;
}
.isMinimizedCart {
  width: 5vw;
}

.fade-enter-active{
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.item-container {
  width: 80vw;
  position: absolute;
  margin: 0 auto;
  left: 50;
  top: 50;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
}
.cart-container {
  width: 20vw;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 50;
  /* background-color: black; */
}

.cart-container button {
  margin: 0px 5px 0px 0px;
  padding: 10px;
  border: none;
}
</style>
