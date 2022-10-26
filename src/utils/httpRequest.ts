import HttServiceException from "../exception/HttServiceException";

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

export default async function httpRequest(config: HttpRequestConfig) {
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
  console.log("api: ", api);
  const httpResponse = await fetch(api, {
    headers: {
      ["Content-Type"]: "application/json",
      ...header,
    },
    method: requestConfig.method,
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

  if (httpResponse.status >= 200 && httpResponse.status < 300) {
    return response;
  } else {
    const error = new HttServiceException(
      httpResponse.statusText || "Http service exception error"
    );
    error.status = httpResponse.status;
    error.url = url;
    error.body = response;
    throw error;
  }
}
