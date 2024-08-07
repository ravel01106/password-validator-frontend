import React from 'react'
import { ICustomProviderProp } from './ICustomProviderProp'
import { IValidator } from '../../../domain/IValidator'
import ValidatorContext from '../context/ValidatorContext'
import { IValidatorContextProps } from '../context/IValidatorContextProps'

const CustomProvider = ({children}:ICustomProviderProp) => {
  const initValidator:IValidator= {
    lengthValid:1,
    containUppercase:false,
    containLowercase:false,
    containNumber:false,
    containUnderscore:false,

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