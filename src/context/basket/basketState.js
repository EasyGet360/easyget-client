import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import BasketContext from './basketContext';
import BasketReducer from './basketReducer';
import useLocalStorage from '../../hooks/useLocalStorage';

import { ADD_PRODUCT, DELETE_PRODUCT, CLEAR_BASKET } from '../types';

const BasketState = (props) => {
  const [storedValue, setLocalStorage] = useLocalStorage('basket', []);
  const initialState = {
    products: storedValue || [],
  };

  const [state, dispatch] = useReducer(BasketReducer, initialState);
  const { products } = state;

  const addProduct = (product) => {
    try {
      dispatch({ type: ADD_PRODUCT, payload: product });
      setLocalStorage([...products, product]);
    } catch (error) {
      console.error(error);
    }
  };

  const clear = () => {
    setLocalStorage([]);
    dispatch({ type: CLEAR_BASKET });
  };

  const deleteProduct = (id) => {
    try {
      const data = products.filter((product) => id !== product.id);
      setLocalStorage(data);
      dispatch({ type: DELETE_PRODUCT, payload: data });
    } catch (error) {}
  };

  return (
    <BasketContext.Provider
      value={{
        products: state.products,
        addProduct,
        deleteProduct,
        clear,
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
