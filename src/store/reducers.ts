import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';

export const state = combineReducers({});

export type State = ReturnType<typeof state>;



export const RESET_REDUCER = 'RESET_REDUCER';

export const rootReducer: Reducer = (currentState: State, action: AnyAction) => {
  if (action.type === RESET_REDUCER) {
    currentState = {
      ...currentState,

    };
  }
  return state(currentState, action as unknown as never);
};