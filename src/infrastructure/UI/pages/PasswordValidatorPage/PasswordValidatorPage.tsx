import React from "react";
import Title from "../../shared/Title";
import { PasswordValidatorResult } from "../../../../domain/entities/PasswordValidatorResult";
import { FaCheckCircle } from "react-icons/fa";

const PasswordValidatorPage = () => {
  const [password, setPassword] = React.useState("");
  const [showResult, setShowResult] = React.useState(false);

  const [passwordValidatorResult, setPasswordValidatorResult] = React.useState({} as PasswordValidatorResult)

  const sendPasswordToValidate = () => {
    if (password === ""){
      alert("fill the field !!!!")
    }else{
      setShowResult(true)
      setPasswordValidatorResult({
        valid: true,
        errorMessage: ""
      })
    }
  }
  const onHandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const renderMessageResult = ():JSX.Element => {
    return (
      <div className={`h-64 w-subContainerWidth
      ${passwordValidatorResult.valid ? "bg-ResultValidColor": "bg-ResultNotValidColor"} rounded-3xl
      flex flex-col justify-evenly items-center`}>
        <p className="text-2xl text-black font-bold">The password is {passwordValidatorResult.valid ? "valid": "not valid"} !!!</p>
        <div className="w-96">
          <nav className="flex flex-row text-black text-xl pb-1"> <FaCheckCircle /> <p className="px-4">Check length</p></nav>
          <nav className="flex flex-row text-black text-xl pb-1"> <FaCheckCircle /> <p className="px-4">Check uppercase</p></nav>
          <nav className="flex flex-row text-black text-xl pb-1"> <FaCheckCircle /> <p className="px-4">Check numbers</p></nav>
          <nav className="flex flex-row text-black text-xl pb-1"> <FaCheckCircle /> <p className="px-4">Check underscore</p></nav>
          <nav className="flex flex-row text-black text-xl pb-1"> <FaCheckCircle /> <p className="px-4">Check lowercase</p></nav>
        </div>
      </div>
    )
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
      rounded-full px-6 text-black" value={password}
      onChange={onHandleChange}/>
      <button type="button" className="bg-buttonColor hover:bg-buttonHover
        h-14 w-48 flex flex-row justify-center items-center text-black
        rounded-full text-2xl font-bold"
        onClick={sendPasswordToValidate}
        >Send</button>
      </div>
        {
          showResult ? (
            <>
            {renderMessageResult()}
            </>
          ): (
            <div className="h-64 w-subContainerWidth text-center">
              <p>Enter a password that meets the conditions of the validator.</p>
            </div>
          )
        }
    </div>
  )
}

export default PasswordValidatorPage