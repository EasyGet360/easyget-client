import { ADD_PRODUCT, DELETE_PRODUCT, CLEAR_BASKET } from '../types';

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case CLEAR_BASKET:
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};
