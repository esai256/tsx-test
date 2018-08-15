export interface validationFunction<T> {
  (value: T): boolean
}
export default interface IValidatedInputComponent<T> {
  validationFunction: validationFunction<T>

  isValueValid: boolean;
  isValidationActive: boolean;
  errorMessage: string;
}
