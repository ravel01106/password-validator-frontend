import { FaCheckCircle } from 'react-icons/fa'
import { MessageResultConditionsProps } from './MessageResultConditionsProps'

const MessageResultConditions = ({passwordValidatorResult}: MessageResultConditionsProps) => {
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

export default MessageResultConditions