const invokeMiddleware = fetchdata => next => action => {
  next (action);
  switch (action.type) {
    case 'FETCH_MEALS':
      fetch ('/api/meals')
        .then (data => {
          next ({
            type: 'FETCH_MEALS_DATA',
            data,
          });
        })
        .catch (err => {
          next ({
            type: 'FETCH_MEALS_DATA_ERROR',
            err,
          });
        });

      break;
  }
};
