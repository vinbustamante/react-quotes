import ObjectMap from "../../type/ObjectMap";
import executeModelValidation from "./executeModelValidation";

export default function modelValidation<TReturn>(
  handler: any,
  ...modelClasses: ObjectMap[]
): TReturn {
  return new Proxy(handler, {
    apply: (originalHandler, self, args) => {
      executeModelValidation(modelClasses, args);
      return originalHandler.apply(self, args);
    },
  });
}
