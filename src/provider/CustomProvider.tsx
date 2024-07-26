import React from 'react'
import { ICustomProviderProp } from '../interfaces/ICustomProviderProp'
import { IValidator } from '../interfaces/IValidator'
import { IValidatorContextProps } from '../interfaces/IValidatorContextProps'
import ValidatorContext from '../context/ValidatorContext'

const CustomProvider = ({children}:ICustomProviderProp) => {
  const initValidator:IValidator= {
    lengthValid:1,
    containUppercase:false,
    containLowercase:false,
    containNumber:false,
    containUndersocre:false,

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