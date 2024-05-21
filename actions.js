import {
  ASYNC_INCREASE_COUNTER,
  ASYNC_REQUEST,
  ASYNC_RESPONSE,
  DECREASE,
  INCREASE,
  RESET,
} from "./action-type.js";
import { actionCreator } from "./redux.js";

export const increase = actionCreator(INCREASE);
export const decrease = actionCreator(DECREASE);
export const reset = actionCreator(RESET);
export const asyncIncrease = actionCreator(ASYNC_INCREASE_COUNTER);
export const asyncRequest = actionCreator(ASYNC_REQUEST);
export const asyncResponse = actionCreator(ASYNC_RESPONSE);
