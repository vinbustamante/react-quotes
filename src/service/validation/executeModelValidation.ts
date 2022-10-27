import ValidationException from "../../exception/ValidationException";
import ObjectMap from "../../type/ObjectMap";

export default function executeModelValidation(
  modelClasses: ObjectMap[],
  args: ObjectMap[]
) {
  const validationErrors: Record<number, ObjectMap> = [];
  let isValidationErrorDetected = false;
  modelClasses.forEach((validation, index) => {
    validationErrors[index] = {};
    const modelValidation = modelClasses[index];
    const modelObject = args[index];
    const properties = Object.keys(validation);
    properties.forEach((property) => {
      const propertyValidationHandler = modelValidation[property];
      if (typeof propertyValidationHandler === "function") {
        try {
          propertyValidationHandler(property, modelObject[property]);
        } catch (error: any) {
          isValidationErrorDetected = true;
          if (error instanceof ValidationException) {
            validationErrors[index][property] = error.message;
          } else {
            validationErrors[index][property] = error;
          }
        }
      }
    });
  });

  if (isValidationErrorDetected) {
    const validationCount = modelClasses.length;
    if (validationCount === 1) {
      if (Object.keys(validationErrors[0]).length > 0) {
        const error = new ValidationException();
        error.validationError = validationErrors[0];
        throw error;
      }
    } else if (validationCount > 1) {
      //
    }
  }
}
