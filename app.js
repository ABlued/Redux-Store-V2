import * as Actions from "./actions.js";
import { reducer } from "./reducer.js";
import { createStore } from "./redux.js";

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(Actions.increase(1));
store.dispatch(Actions.increase(2));
store.dispatch(Actions.increase(3));
store.dispatch(Actions.decrease(2));
store.dispatch(Actions.reset());
