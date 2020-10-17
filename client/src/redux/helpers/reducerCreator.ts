import { createReducer } from '@reduxjs/toolkit';
import { AsyncFunction } from './actionCreator';

export const createLoadingReducer = (asyncAction: AsyncFunction) => {
  const loading = createReducer<{ isLoading: boolean }>(
    { isLoading: false },
    {
      [asyncAction.requestAction.type]: (state, action: ReturnType<typeof asyncAction.requestPayload>) => {
        state.isLoading = true;
      },
      [asyncAction.successAction.type]: (state, action: ReturnType<typeof asyncAction.successPayload>) => {
        state.isLoading = false;
      },
      [asyncAction.failureAction.type]: (state, action) => {
        state.isLoading = false;
      },
    },
  );
  return loading;
};
