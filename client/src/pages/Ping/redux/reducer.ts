import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { PingModel } from 'src/api/models/ping.model';
import { createLoadingReducer } from 'src/redux/helpers/reducerCreator';

import { fetchPing } from './actions';

export type PingState = {
  ping: PingModel;
};

const state = createReducer<PingState>(
  { ping: { ping: '' } },
  {
    [fetchPing.requestAction.type]: (state, action: ReturnType<typeof fetchPing.requestPayload>) => {
      // action is any here
    },
    [fetchPing.successAction.type]: (state, action: ReturnType<typeof fetchPing.successPayload>) => {
      state.ping.ping = action.payload.ping;
    },
  },
);

const pingReducer = combineReducers({
  state,
  loading: createLoadingReducer(fetchPing),
});

export default pingReducer;
