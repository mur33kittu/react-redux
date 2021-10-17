import {FETCH_DATA} from '../actions/types';

export default function (state = {}, actions) {
  switch (actions.type) {
    case FETCH_DATA:
      console.log(actions.payload);
      return {
        meals: actions.payload,
      };
    default:
      return state;
  }
}
