export type PasswordValidatorResult = {
  valid:boolean,
  lengthValid:boolean
  containUpperCase:boolean
  containLowerCase:boolean
  containNumber:boolean
  containUnderscore:boolean
}