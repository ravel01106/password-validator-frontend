import ConvertUtils from "../../utils/ConvertUtils";
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

const ValidatorService = {
  convertValidatorFormToValidator
}

export default ValidatorService
