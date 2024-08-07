import { PasswordValidatorResult } from "../../domain/entities/PasswordValidatorResult"
import { Validator } from "../../domain/entities/Validator"
import http from "../http/http"

const validatePassword = async (validator: Validator, password:string): Promise<PasswordValidatorResult> => {
  const url = "http://localhost:8080/app/validate/" + password
  const passwordValidatorResult = await http.post<PasswordValidatorResult>(url, validator)
  return passwordValidatorResult
}

const ValidatorRepository = {
  validatePassword
}

export default ValidatorRepository