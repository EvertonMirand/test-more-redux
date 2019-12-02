import { createStore, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const enhancer = middlewares ? applyMiddleware(...middlewares) : undefined;
  return createStore(reducers, enhancer);
};
