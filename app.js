import * as Actions from "./actions.js";
import { reducer } from "./reducer.js";
import { createStore } from "./redux.js";
import { logger } from "./logger.js";

const middleware1 = (store) => (next) => (action) => {
  console.log("middleware1", action);
  next(action);
};
const middleware2 = (store) => (next) => (action) => {
  console.log("middleware2", action);
  next(action);
};
const middleware3 = (store) => (next) => (action) => {
  console.log("middleware3", action);
  next(action);
};

const store = createStore(reducer, [
  middleware1,
  middleware2,
  middleware3,
  logger,
]);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(Actions.increase(1));
store.dispatch(Actions.increase(2));
store.dispatch(Actions.increase(3));
store.dispatch(Actions.decrease(2));
store.dispatch(Actions.reset());
