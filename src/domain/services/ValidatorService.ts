import ValidatorRepository from "../../infrastructure/repository/ValidatorRepository";
import { PasswordValidatorResult } from "../entities/PasswordValidatorResult";
import { Validator } from "../entities/Validator";
import { ValidatorForm } from "../entities/ValidatorForm";

const convertValidatorFormToValidator = (validatorForm:ValidatorForm): Validator => {
  return {
    lengthValid: convertStringToNumber(validatorForm.lengthValid),
    containUppercase: convertStringToBoolean(validatorForm.containUppercaseInput),
    containLowercase: convertStringToBoolean(validatorForm.containLowercaseInput),
    containNumber: convertStringToBoolean(validatorForm.containNumberInput),
    containUnderscore: convertStringToBoolean(validatorForm.containUnderscoreInput)
  }
}

const validatePassword = async (validator:Validator, password:string): Promise<PasswordValidatorResult> => {
  return ValidatorRepository.validatePassword(validator, password)
}

const getDefaultValidator = (): Validator => {
  return {
    lengthValid: 1,
    containLowercase: false,
    containUppercase: false,
    containNumber: false,
    containUnderscore: false
  }
}

const convertStringToNumber = (expression:string) => {
  return !Number.isNaN(expression) ? parseInt(expression): 1;
}

const convertStringToBoolean = (expression:string) => {
  return expression === "true" ? true: false;

}

const ValidatorService = {
  convertValidatorFormToValidator,
  validatePassword,
  getDefaultValidator
}

export default ValidatorService
