import { createStore } from "vuex";
import productsModule from '../store/modules/products/index';
import authModule from '../store/modules/auth/index';
import cartModule from '../store/modules/cart/index'


const store = createStore({
    modules:{
      productsModule: productsModule,
      authModule: authModule,
      cartModule: cartModule
    }
  });

export default store;