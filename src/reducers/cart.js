import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from '../actions/types';

const initialState = {
  items: [],
  totalAmount: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {   
    case ADD_TO_CART:
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartItemIndex = state.items.findIndex (
        item => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat (action.payload);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case REMOVE_FROM_CART:
      const existingCartItemIndex1 = state.items.findIndex (
        item => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount1 = state.totalAmount - existingItem.price;
      let updatedItems1;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter (item => item.id !== action.id);
      } else {
        const updatedItem = {...existingItem, amount: existingItem.amount - 1};
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex1] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount1,
      };

    case CLEAR_CART:
      return state;
    default:
      return state;
  }
}
