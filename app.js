import * as Actions from "./actions.js";
import { reducer } from "./reducer.js";
import { createStore } from "./redux.js";
import { logger } from "./logger.js";
import { ASYNC_INCREASE_COUNTER } from "./action-type.js";

const asyncRouter = (jobs) => (store) => (next) => (action) => {
  const matchJob = Object.entries(asyncJobs).find(
    ([type]) => action.type === type
  );

  if (matchJob) {
    matchJob[1](store, action);
  } else {
    next(action);
  }
};

const asyncJobs = {
  [ASYNC_INCREASE_COUNTER]: function (store, action) {
    store.dispatch(Actions.asyncRequest());
    setTimeout(() => {
      store.dispatch(Actions.increase(20));
      store.dispatch(Actions.asyncResponse());
    }, 3000);
  },
};

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
  asyncRouter(asyncJobs),
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
store.dispatch(Actions.asyncIncrease());
