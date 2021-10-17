import reducers from '../reducers';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { generateMealData } from '../actions';

const initialState = {};
const middlewares = [thunk];

const store = createStore (
  reducers,
  initialState,
  applyMiddleware (...middlewares)
);

store.dispatch(generateMealData());

export default store;
