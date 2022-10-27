import ValidationException from "../../../exception/ValidationException";

export default function requiredString<TValue extends unknown>(
  key: string,
  value: TValue
) {
  if (typeof value !== "string" || value.length === 0) {
    throw new ValidationException(`${key} is required`);
  }
}
