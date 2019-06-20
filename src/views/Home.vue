<template>
  <div class="home">
    <checkoutModal v-show="checkoutModalVisibile" @close="closeCheckoutModal"/>
    <div class="home-container">
      <div class="row">
        <div class="column9">
          <div class="item-container">
            <shopItem itemName="Item#1" :itemPrice="44" itemId="1" itemPictureUrl="https://placeimg.com/200/200/tech"/>
            <shopItem itemName="Item#1" :itemPrice="44" itemId="2" itemPictureUrl="https://placeimg.com/200/200/tech"/>
            <shopItem itemName="Item#2" :itemPrice="22" itemId="3" itemPictureUrl="https://placeimg.com/200/200/tech"/>
            <shopItem itemName="Item#2" :itemPrice="22" itemId="4" itemPictureUrl="https://placeimg.com/200/200/tech"/>
            <shopItem itemName="Item#2" :itemPrice="22" itemId="5" itemPictureUrl="https://placeimg.com/200/200/tech"/>
            <shopItem itemName="Item#2" :itemPrice="22" itemId="6" itemPictureUrl="https://placeimg.com/200/200/tech"/>
            <!-- <shopItem itemName="Item#2" :itemPrice="22" itemId="7"/>
            <shopItem itemName="Item#2" :itemPrice="22" itemId="8"/>
            <shopItem itemName="Item#2" :itemPrice="22" itemId="9"/>
            <shopItem itemName="Item#2" :itemPrice="22" itemId="10"/>
            <shopItem itemName="Item#2" :itemPrice="22" itemId="11"/>
            <shopItem itemName="Item#2" :itemPrice="22" itemId="12"/> -->
          </div>
        </div>
        <div class="column3">
          <!-- Cart Container -->
          <div>
            <transition name="fade">
              <cart v-if="!this.$store.getters.cartMinimized" @open="showCheckoutModal"/>
            </transition>
          </div>
        </div>
      </div>
      <div class="row2">
        <cart v-if="!this.$store.getters.cartMinimized" @open="showCheckoutModal"/>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import shopItem from '@/components/ShopItem.vue'
import cart from '@/components/Cart.vue'
import checkoutModal from '@/components/CheckoutModal.vue'
export default {
  name: 'home',
  components: {
    shopItem,
    cart,
    checkoutModal
  },
  data() { 
    return {
      isCartMinimized: false,
      checkoutModalVisibile: false
    }
  },
  methods: {
    minimizeCart: function(){
      this.$store.commit("minimizeCart");
    },
    showCheckoutModal() {
      this.checkoutModalVisibile = true;
    },
    closeCheckoutModal() {
      this.checkoutModalVisibile = false;
    }
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

.fade-enter-active{
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.isMinimized {
  width: 95vw;
}
.isMinimizedCart {
  width: 5vw;
}


.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.row2 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
.column3 {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 3;
}
.column9 {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 9;
}
.column1 {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.home-container {
  background-color: rgb(226, 226, 226);
  /* height: calc(100vh - 90px); */
  padding: 0px 0px 168px 0px;
  height: 100%;
}

.item-container {
  /* width: 80vw; */
  /* width: 80%; */
  /* position: absolute; */
  margin: 0 auto;
  /* left: 50; */
  /* top: 50; */
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
}
.cart-main-container {
  width: 20vw;
  /* width: 20%; */
  height: 100vh;
  position: absolute;
  right: 0;
  top: 50;
  /* background-color: black; */
}

.cart-main-container button {
  margin: 0px 5px 0px 0px;
  padding: 10px;
  border: none;
}

@media only screen and (max-width: 1240px) {
  .column9 {
    flex: 2;
  }
  .column3 {
    flex: 1;
  }
}
@media only screen and (max-width: 640px) {
  .column9 {
    flex: 2;
  }
  .column3 {
    display: none;
  }
}
@media only screen and (min-width: 640px) {
  .row2 {
    display: none;
  }
}

</style>
