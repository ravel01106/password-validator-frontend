
import { PasswordValidatorResult } from "../../domain/entities/PasswordValidatorResult"
import { Validator } from "../../domain/entities/Validator"
import { PasswordValidatorResultDTO } from "../http/dto/PasswordValidatorResultDTO"
import http from "../http/http"

const validatePassword = async (validator: Validator, password:string): Promise<PasswordValidatorResult> => {
  const url = "http://localhost:8080/app/validate/" + password
  const passwordValidatorResultDTO = await http.post<PasswordValidatorResultDTO>(url, validator)


  const passwordValidatorResult: PasswordValidatorResult = {
    valid: true,
    lengthValid: true,
    containUpperCase: true,
    containLowerCase: true,
    containNumber: true,
    containUnderscore: true
  }
  if (passwordValidatorResultDTO.errorMessage !== ""){
    const errorMessage = passwordValidatorResultDTO.errorMessage.toLowerCase()
    passwordValidatorResult.valid = false
    passwordValidatorResult.lengthValid = !errorMessage.includes("length")
    passwordValidatorResult.containUpperCase = !errorMessage.includes("uppercase")
    passwordValidatorResult.containLowerCase = !errorMessage.includes("lowercase")
    passwordValidatorResult.containNumber = !errorMessage.includes("number")
    passwordValidatorResult.containUnderscore = !errorMessage.includes("underscore")
  }


  return passwordValidatorResult
}

const ValidatorRepository = {
  validatePassword
}

export default ValidatorRepository