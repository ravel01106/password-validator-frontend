import React from 'react'
import { ICustomProviderProp } from './ICustomProviderProp'
import { Validator } from '../../../domain/entities/Validator'
import ValidatorContext from '../context/ValidatorContext'
import { IValidatorContextProps } from '../context/IValidatorContextProps'

const CustomProvider = ({children}:ICustomProviderProp) => {
  const initValidator:Validator= {
    lengthValid:1,
    containsUpperCase:false,
    containsLowerCase:false,
    containsNumber:false,
    containsUnderscore:false,

  }

  const [validator, setValidator] = React.useState(initValidator);

  const validatorData: IValidatorContextProps = {
    validator,
    setValidator
  }

  return (
    <ValidatorContext.Provider value={validatorData}>
      {children}
    </ValidatorContext.Provider>
  )
}

export default CustomProvider