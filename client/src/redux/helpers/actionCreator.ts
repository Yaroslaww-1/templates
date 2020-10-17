/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, PayloadAction } from '@reduxjs/toolkit';

const withPayloadType = <T = any>() => {
  return (t: T) => ({ payload: t });
};

interface IPayloadCreators<R = any, S = any> {
  request(...args: any[]): R;
  success(...args: any[]): S;
  failure?(message: string): string;
}

export const createAsyncAction = <R = string, S = any>(
  componentName: string,
  type: string,
  payloadCreators: IPayloadCreators<R, S>,
) => {
  const requestType = `${componentName}_${type}_REQUEST`;
  const successType = `${componentName}_${type}_SUCCESS`;
  const failureType = payloadCreators.failure ? `${type}_FAILURE` : 'ERROR';

  return {
    types: { request: requestType, success: successType, failure: failureType },

    request(...args: any[]) {
      const action = createAction(requestType, withPayloadType<R>());
      return action(payloadCreators.request(...args));
    },
    requestPayload: (): PayloadAction<R> => (undefined as unknown) as PayloadAction<R>,
    requestAction: createAction(requestType, withPayloadType<R>()),

    success(...args: any[]) {
      const action = createAction(successType, withPayloadType<S>());
      return action(payloadCreators.success(...args));
    },
    successPayload: (): PayloadAction<S> => (undefined as unknown) as PayloadAction<S>,
    successAction: createAction(successType, withPayloadType<S>()),

    failure(message: string) {
      console.log('Error happened in redux action', message);
      const action = createAction(failureType, withPayloadType<{ message: string }>());
      return action({ message });
    },
    failureAction: createAction(failureType, withPayloadType<{ message: string }>()),
  };
};

class Helper<R, S> {
  Return = createAsyncAction<R, S>('', '', {} as IPayloadCreators);
}
type FuncReturnType<R, S> = Helper<R, S>['Return'];
export type AsyncFunction = FuncReturnType<any, any>;
