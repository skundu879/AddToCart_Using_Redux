import { BUY_CAKE, REMOVE_CART } from "./cakeType";

const initialState = {
  numberOfCake: 10,
  cart: 0
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
        cart: state.cart + 1
      };
    case REMOVE_CART: {
      return {
        ...state,
        cart: state.cart - 1,
        numberOfCake: state.numberOfCake + 1
      };
    }
    default:
      return state;
  }
};

export default cakeReducer;
