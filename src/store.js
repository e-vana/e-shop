import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems: [],
    cartMinimized: false
  },
  mutations: {
    addToCart: (state, payload) => {
      state.cartItems.push(payload);
    },
    removeItemFromCart: (state, payload) => {
      state.cartItems.splice(payload, 1)
    },
    clearCart(state) {
      state.cartItems.splice(0, state.cartItems.length);
    },
    minimizeCart(state){
      state.cartMinimized = !state.cartMinimized;
    }
  },
  actions: {

  },
  getters: {
    cartItems: state => {
      return state.cartItems;
    },
    cartMinimized: state => {
      return state.cartMinimized;
    }
  }
})
