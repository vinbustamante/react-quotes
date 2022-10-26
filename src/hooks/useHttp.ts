import { useReducer } from "react";
import HttServiceException from "../exception/HttServiceException";

export enum HttpStatusEnum {
  idle = "idle",
  pending = "pending",
  completed = "completed",
  error = "error",
}

type HttpState = {
  data?: any;
  error?: any;
  status: HttpStatusEnum;
};

enum HttpReducerActionEnum {
  send = "send",
  success = "success",
  error = "error",
}

type HttpReducerAction = {
  type: HttpReducerActionEnum;
  payload?: any;
};

function _httpReducer(state: HttpState, action: HttpReducerAction) {
  if (action.type === HttpReducerActionEnum.send) {
    return {
      data: null,
      error: null,
      status: HttpStatusEnum.pending,
    };
  } else if (action.type === HttpReducerActionEnum.success) {
    return {
      data: action.payload,
      error: null,
      status: HttpStatusEnum.completed,
    };
  } else if (action.type === HttpReducerActionEnum.error) {
    return {
      data: null,
      error: action.payload,
      status: HttpStatusEnum.error,
    };
  } else {
    return state;
  }
}

export enum HttpMethodEnum {
  get = "GET",
  head = "HEAD",
  option = "OPTION",
  post = "POST",
  put = "PUT",
  delete = "DELETE",
}

type HttpRequestConfig = {
  method?: HttpMethodEnum;
  url: string;
  header?: Record<string, any>;
  data?: Record<string, any>;
};

export default function useHttp() {
  const [httpState, dispatch] = useReducer(_httpReducer, {
    status: HttpStatusEnum.idle,
    data: null,
    error: null,
  });

  const sendRequest = async (config: HttpRequestConfig) => {
    dispatch({ type: HttpReducerActionEnum.send });
    try {
      const { url, header = {}, ...requestConfig } = config;
      let api = url;
      let body;
      requestConfig.method = requestConfig.method || HttpMethodEnum.get;
      if (requestConfig.data) {
        if (
          requestConfig.method.toLowerCase() === "get" ||
          requestConfig.method.toLowerCase() === "option"
        ) {
          api += new URLSearchParams(requestConfig.data);
        } else {
          body = JSON.stringify(requestConfig.data);
        }
      }
      const httpResponse = await fetch(api, {
        headers: {
          ["Content-Type"]: "application/json",
          ...header,
        },
        body,
      });
      let response: any = await httpResponse.text();
      let jsonData = {};
      try {
        jsonData = JSON.parse(response);
        response = jsonData;
      } catch (err) {
        // todo: log error calling service
      }
      // return response;
      if (httpResponse.status >= 200 && httpResponse.status < 300) {
        dispatch({
          type: HttpReducerActionEnum.success,
          payload: response,
        });
      } else {
        const error = new HttServiceException(
          httpResponse.statusText || "Http service exception error"
        );
        error.status = httpResponse.status;
        error.url = url;
        error.body = response;
        dispatch({
          type: HttpReducerActionEnum.error,
          payload: error,
        });
      }
    } catch (error: any) {
      dispatch({
        type: HttpReducerActionEnum.error,
        payload: error.message || "Something went wrong!",
      });
    }
  };

  return {
    sendRequest,
    state: httpState,
  };
}
