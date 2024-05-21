import * as ActionType from "./action-type.js";

const initialState = {
  count: 0,
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionType.INCREASE:
      if (action.payload) {
        return {
          ...state,
          count: state.count + action.payload,
        };
      }
      return {
        // 참조 무결성을 지키기 위해 매번 새로운 객체를 넘겨줘야함
        ...state,
        count: state.count + 1,
      };
    case ActionType.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    case ActionType.RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return { ...state };
  }
}
