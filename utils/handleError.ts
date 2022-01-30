import { FieldError } from "react-hook-form";

const defaultHandler = (error: Error) => console.error(error.message);

export function handleError(error: Error, handler = defaultHandler) {
  handler(error);
}

export function handleInputError(error: FieldError): string {
  if (error.message) return error.message;
  switch (error.type) {
    case "validate":
      return "Invalid email or password";
    case "required":
      return "This field is required";
    case "pattern":
      return "Invalid email";
  }
  return "Something went wrong";
}

export const getErrorMessage = (e: unknown) => {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  return "Unknown error";
};
