import { BUY_CAKE, REMOVE_CART } from "./cakeType";
export const buyCake = () => {
  return {
    type: BUY_CAKE
  };
};
export const removeFromCartCake = () => {
  return {
    type: REMOVE_CART
  };
};
