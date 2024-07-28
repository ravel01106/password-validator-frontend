import { useState } from "react"
import Title from "../components/Title"

const PasswordValidatorScreen = () => {
  const [showResult, setShowResult] = useState(false);
  const sendPasswordToValidate = () => {
    setShowResult(true)
  }
  return (
    <div
    className="w-mainContainerWidth
    h-mainContainerHeigth
    flex
    flex-col items-center justify-evenly">
      <Title title="Validate your password"/>
      <div className="w-96 h-32 flex flex-col items-center justify-between">
      <input type="password" className="bg-white w-96 h-14 
      rounded-full px-6 text-black"/>
      <button type="button" className="bg-buttonColor hover:bg-buttonHover 
        h-14 w-48 flex flex-row justify-center items-center text-black 
        rounded-full text-2xl font-bold"
        onClick={sendPasswordToValidate}
        >Send</button>
      </div>
        {
          showResult ? (
            <div className="h-64 w-subContainerWidth bg-green-500 rounded-3xl">
              
            </div>
          ): (
            <div className="h-64 w-subContainerWidth text-center">
              <p>Enter a password that meets the conditions of the validator.</p>
            </div>
          )
        }
    </div>
  )
}

export default PasswordValidatorScreen