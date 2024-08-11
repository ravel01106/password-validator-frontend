import ValidatorRepository from "../../infrastructure/repository/ValidatorRepository";
import { PasswordValidatorResult } from "../entities/PasswordValidatorResult";
import { Validator } from "../entities/Validator";
import { ValidatorForm } from "../entities/ValidatorForm";

const convertValidatorFormToValidator = (validatorForm:ValidatorForm): Validator => {
  return {
    lengthValid: convertStringToNumber(validatorForm.lengthValid),
    containsUpperCase: convertStringToBoolean(validatorForm.containUppercaseInput),
    containsLowerCase: convertStringToBoolean(validatorForm.containLowercaseInput),
    containsNumber: convertStringToBoolean(validatorForm.containNumberInput),
    containsUnderscore: convertStringToBoolean(validatorForm.containUnderscoreInput)
  }
}

const validatePassword = async (validator:Validator, password:string): Promise<PasswordValidatorResult> => {
  return ValidatorRepository.validatePassword(validator, password)
}

const getDefaultValidator = (): Validator => {
  return {
    lengthValid: 1,
    containsLowerCase: false,
    containsUpperCase: false,
    containsNumber: false,
    containsUnderscore: false
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
