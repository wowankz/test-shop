import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    basket: [],
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    setBasket(state, basket) {
      state.basket = basket;
    },
  },

  actions: {
    async loadProducts({ commit }) {
      try {
        const res = await fetch('https://raw.githubusercontent.com/wowankz/static/master/test-shop/catalog.json');
        let products = await res.json();
        console.log('Products: ', products);
        commit('setProducts', products);

      } catch (error) {
        console.log(error);
      }

    },

    updateBasket({ commit, state }, payload) {
      const { type, product } = payload;
      const basket = [...state.basket]
      if (type === 'add') {
        const index = basket.findIndex(item => item.id === product.id);
        if (index != -1) {
          basket[index].count++;
        } else {
          product['count'] = 1;
          basket.push(product)
        }
      }

      if (type === 'del') {
        const index = basket.findIndex(item => item.id === product.id);
        if (index != -1) {
          if (basket[index].count > 1) basket[index].count--;
          else basket.splice(index, 1);
        }
      }

      commit('setBasket', basket);

    }
  },

  getters: {
    getProducts: (state) => state.products,
    getBasket: state => state.basket
  }

});
