import ServiceException from "./ServiceException";

export default class HttServiceException extends ServiceException {
  status: number = 0;
  url: string = "";
  body: any = undefined;
}
