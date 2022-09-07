export default {
    addToCart(context, payload) {
        context.commit('addToCart', payload);
      },
      removeToCart(context, payload) {
        context.commit('removeToCart', payload);
      }
}