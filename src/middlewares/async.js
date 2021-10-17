export default ({dispatch}) => next => action => {
    console.log(action.payload)
  if (!action.payload || !action.payload.then) {
    return next (action);
  }
  action.payload.then (function (response) {
    const newAction = {...action, payload: response};
    dispatch (newAction);
  });
};
