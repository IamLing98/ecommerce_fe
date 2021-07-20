import { atom } from "recoil";
const CART_STATE = "CART_STATE";
const cartStateGlobal = atom({
  key: CART_STATE,
  default: {
    items: [],
  },
  dangerouslyAllowMutability: true,
});
export { cartStateGlobal };
