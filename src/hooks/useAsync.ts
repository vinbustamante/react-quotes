import { useReducer } from "react";

export enum AsyncStatusEnum {
  idle = "idle",
  pending = "pending",
  completed = "completed",
  error = "error",
}

type AsyncState = {
  data?: any;
  error?: any;
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

function _asyncReducer(state: AsyncState, action: AsyncReducerAction) {
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

type AsyncFunctionHandler = (...requestParams: any) => Promise<any>;

export default function useAsync(asyncFunctionHandler: AsyncFunctionHandler) {
  const [httpState, dispatch] = useReducer(_asyncReducer, {
    status: AsyncStatusEnum.idle,
    data: null,
    error: null,
  });

  const sendRequest = async (...requestParams: any) => {
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
  };

  return {
    sendRequest,
    state: httpState,
  };
}
