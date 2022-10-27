import { useCallback, useReducer } from "react";
import Nullable from "../type/Nullable";

export enum AsyncStatusEnum {
  idle = "idle",
  pending = "pending",
  completed = "completed",
  error = "error",
}

export type AsyncState<TModel> = {
  data: Nullable<TModel>;
  error: any;
  status: AsyncStatusEnum;
};

enum AsyncReducerActionEnum {
  send = "send",
  success = "success",
  error = "error",
}

type AsyncReducerAction = {
  type: AsyncReducerActionEnum;
  payload?: any;
};

type AsyncReducerHandler<TModel> = (
  state: AsyncState<TModel>,
  action: AsyncReducerAction
) => AsyncState<TModel>;

function _asyncReducer<TModel>(
  state: AsyncState<TModel>,
  action: AsyncReducerAction
): AsyncState<TModel> {
  if (action.type === AsyncReducerActionEnum.send) {
    return {
      data: null,
      error: null,
      status: AsyncStatusEnum.pending,
    };
  } else if (action.type === AsyncReducerActionEnum.success) {
    return {
      data: action.payload,
      error: null,
      status: AsyncStatusEnum.completed,
    };
  } else if (action.type === AsyncReducerActionEnum.error) {
    return {
      data: null,
      error: action.payload,
      status: AsyncStatusEnum.error,
    };
  } else {
    return state;
  }
}

type AsyncFunctionHandler<TReturn> = (
  ...requestParams: any
) => Promise<TReturn>;

export default function useAsync<TReturn>(
  asyncFunctionHandler: AsyncFunctionHandler<TReturn>
) {
  const reducerHandler: AsyncReducerHandler<TReturn> = _asyncReducer;
  const [httpState, dispatch] = useReducer(reducerHandler, {
    status: AsyncStatusEnum.idle,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (...requestParams: any) => {
      dispatch({ type: AsyncReducerActionEnum.send });
      try {
        const responseData = await asyncFunctionHandler(...requestParams);
        dispatch({
          type: AsyncReducerActionEnum.success,
          payload: responseData,
        });
      } catch (error: any) {
        dispatch({
          type: AsyncReducerActionEnum.error,
          payload: error.message || "Something went wrong!",
        });
      }
    },
    [asyncFunctionHandler]
  );

  return {
    sendRequest,
    state: httpState,
  };
}
