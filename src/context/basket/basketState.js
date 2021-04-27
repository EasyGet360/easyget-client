import React, { useReducer } from 'react';
import BasketContext from './basketContext';
import BasketReducer from './basketReducer';
import PropTypes from 'prop-types';

import { ADD_PRODUCT, DELETE_PRODUCT } from '../types';

const BasketState = (props) => {
  const initialState = {
    products: [],
  };

  const [state, dispatch] = useReducer(BasketReducer, initialState);

  const addProduct = (product) => {
    try {
      initialState.products.push(product);
      dispatch({ type: ADD_PRODUCT, payload: initialState.products });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = (product) => {
    try {
      const data = initialState.products.filter((productState) => product.id !== productState.id);
      dispatch({ type: DELETE_PRODUCT, payload: data });
    } catch (error) {}
  };

  return (
    <BasketContext.Provider
      value={{
        products: state.products,
        addProduct,
        deleteProduct,
      }}
    >
      <div>{props.children}</div>
    </BasketContext.Provider>
  );
};

BasketState.propTypes = {
  children: PropTypes.node,
};
export default BasketState;