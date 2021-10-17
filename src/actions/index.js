import {
  ADD_TO_CART,
  CHANGE_AUTH,
  CLEAR_CART,
  FETCH_DATA,
  REMOVE_FROM_CART,
} from './types';

const initialState = {
  items: [],
  totalAmount: 0,
};

export function changeAuth (isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
}

export function generateMealData () {
  return async function (dispatch) {    
    await fetch ('/api/meals').then (res => res.json ()).then (meals => {
      dispatch ({
        type: FETCH_DATA,
        payload: meals,
      });
    });
  };
}

export function addToCart (item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}

export function removeFromCart (item) {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
}

export function clearCart () {
  return {
    type: CLEAR_CART,
    payload: initialState,
  };
}
