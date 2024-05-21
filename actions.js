import {
  ASYNC_INCREASE_COUNTER,
  DECREASE,
  INCREASE,
  RESET,
} from "./action-type.js";
import { actionCreator } from "./redux.js";

export const increase = actionCreator(INCREASE);
export const decrease = actionCreator(DECREASE);
export const reset = actionCreator(RESET);
export const asyncIncrease = actionCreator(ASYNC_INCREASE_COUNTER);
