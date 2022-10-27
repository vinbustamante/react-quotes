import ObjectMap from "../type/ObjectMap";
import ApplicationException from "./ServiceException";

export default class ValidationException extends ApplicationException {
  status: number = 400;
  validationError: ObjectMap = {};
}
