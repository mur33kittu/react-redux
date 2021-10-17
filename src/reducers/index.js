import {combineReducers} from 'redux';
import authReducer from '../reducers/auth';
import cartReducer from '../reducers/cart';
import mealsReducer from '../reducers/meals';

export default combineReducers ({
  auth: authReducer,
  cart: cartReducer,
  meals: mealsReducer
});
