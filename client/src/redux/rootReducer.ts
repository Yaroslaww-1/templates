import { combineReducers } from 'redux';
import pingReducer from 'src/pages/Ping/redux/reducer';

const RootReducer = combineReducers({
  ping: pingReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
