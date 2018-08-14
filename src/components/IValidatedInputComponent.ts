export interface validationFunction<T> {
  (value: T): boolean
}
export interface IValidatedInputComponent<T> {
  validationFunction: validationFunction<T>

  isValueValid: boolean;
}
