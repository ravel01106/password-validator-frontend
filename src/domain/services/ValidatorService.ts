import ValidatorRepository from "../../infrastructure/repository/ValidatorRepository";
import ConvertUtils from "../../utils/ConvertUtils";
import { PasswordValidatorResult } from "../entities/PasswordValidatorResult";
import { Validator } from "../entities/Validator";
import { ValidatorForm } from "../entities/ValidatorForm";

const convertValidatorFormToValidator = (validatorForm:ValidatorForm): Validator => {
  return {
    lengthValid: ConvertUtils.convertStringToNumber(validatorForm.lengthValid),
    containUppercase: ConvertUtils.convertStringToBoolean(validatorForm.containUppercaseInput),
    containLowercase: ConvertUtils.convertStringToBoolean(validatorForm.containLowercaseInput),
    containNumber: ConvertUtils.convertStringToBoolean(validatorForm.containNumberInput),
    containUnderscore: ConvertUtils.convertStringToBoolean(validatorForm.containUnderscoreInput)
  }
}

const validatePassword = async (validator:Validator, password:string): Promise<PasswordValidatorResult> => {
  return ValidatorRepository.validatePassword(validator, password)
}

const ValidatorService = {
  convertValidatorFormToValidator,
  validatePassword
}

export default ValidatorService
