export default {
  addToCart(state, payload) {
    const productInCartIndex = state.cart.items.findIndex(
      (ci) => ci.id === payload.product.id
    );

    if (productInCartIndex > -1) {
      state.cart.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        ...payload.product,
        qty: 1,
      };
      state.cart.items.push(newItem);
    }
    state.cart.qty++;
    state.cart.total += payload.product.price;
    console.log(state.cart);
  },
  removeToCart(state, payload) {
    const productInCartIndex = state.cart.items.findIndex(
      (cartItem) => cartItem.id === payload.productId
    );
    const prodData = state.cart.items[productInCartIndex];
    state.cart.items.splice(productInCartIndex, 1);
    state.cart.qty -= prodData.qty;
    state.cart.total -= prodData.price * prodData.qty;
  }
};
