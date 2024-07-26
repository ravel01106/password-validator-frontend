import React from "react"
import { TbPointFilled } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import { IValidatorFrom } from "../interfaces/IValidadorForm"

const FormCreateValidator = () => {
  const initCurrentValidator: IValidatorFrom = {
    lengthValid:"1",
    containUppercaseInput: "false",
    containLowercaseInput: "false",
    containNumberInput: "false",
    containUnderscoreInput: "false"
  }
  const [currentValidator, setCurentValidator] = React.useState(initCurrentValidator);

  const link = "/validator/password"
  const navigate = useNavigate()

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCurentValidator({
      ...currentValidator,
      [e.target.name]: e.target.value
    })
  }

  const navigateToPasswordValidator = () => {

    navigate(link)
  }
  return (
    <div className="bg-white text-black
    w-formContainerWidth h-formContainerHeigth rounded-medium
    flex flex-col items-center justify-around py-2 text-xl">

      <div className="w-96 flex flex-row justify-between">

        <div className="flex flex-row w-56 items-center">
          <TbPointFilled size={22}/>
          <label htmlFor="lengthValid" className="pl-2">Minimum length:</label>
        </div>

        <input type="number" id="lengthValid"
          name="lengthValid" min={1} max={100} value={currentValidator.lengthValid}
          className="bg-white border border-black"
          onChange={handleInputChange}/>

      </div>

      <div className="w-96 flex flex-row justify-between">

        <div className="flex flex-row w-56 items-center">
          <TbPointFilled size={22}/>
          <legend className="pl-2">Enable uppercase:</legend>
        </div>

        <div className="w-32 flex flex-row justify-between">
          <div className="w-13 flex flex-row justify-between">
            <label htmlFor="YesUppercase">Yes</label>
            <input type="radio" name="containUppercaseInput"
              value={"true"} id="YesUppercase"
              checked={currentValidator.containUppercaseInput === "true"}
              onChange={handleInputChange}/>
          </div>

          <div className="w-13 flex flex-row justify-between">
            <label htmlFor="NoUppercase">No</label>
            <input type="radio" name="containUppercaseInput"
              id="NoUppercase" value={"false"}
              checked={currentValidator.containUppercaseInput === "false"}
              onChange={handleInputChange}/>
          </div>

        </div>

      </div>

      <div className="w-96 flex flex-row justify-between">

        <div className="flex flex-row w-56 items-center">
          <TbPointFilled size={22}/>
          <legend className="pl-2">Enable lowercase:</legend>
        </div>

        <div className="w-32 flex flex-row justify-between">

          <div className="w-13 flex flex-row justify-between">
            <label htmlFor="YesLowercase">Yes</label>
            <input type="radio" name="containLowercaseInput"
              id="YesLowercase" value={"true"}
              checked={currentValidator.containLowercaseInput === "true"}
              onChange={handleInputChange}/>
          </div>

          <div className="w-13 flex flex-row justify-between">
            <label htmlFor="NoLowercase">No</label>
            <input type="radio" name="containLowercaseInput"
              id="NoLowercase" value={"false"}
              checked={currentValidator.containLowercaseInput === "false"}
              onChange={handleInputChange}/>
          </div>

        </div>

      </div>


      <div className="w-96 flex flex-row justify-between">

        <div className="flex flex-row w-56 items-center">
          <TbPointFilled size={22}/>
          <legend className="pl-2">Enable numbers:</legend>
        </div>

        <div className="w-32 flex flex-row justify-between">

          <div className="w-13 flex flex-row justify-between">
            <label htmlFor="YesNumber">Yes</label>
            <input type="radio" id="YesNumber"
              name="containNumberInput" value={"true"}
              checked={currentValidator.containNumberInput === "true"}
              onChange={handleInputChange}/>
          </div>

          <div className="w-13 flex flex-row justify-between">
            <label htmlFor="NoNumber">No</label>
            <input type="radio" id="NoNumber"
              name="containNumberInput" value={"false"}
              checked={currentValidator.containNumberInput === "false"}
              onChange={handleInputChange}/>
          </div>

        </div>

      </div>
      <div className="w-96 flex flex-row justify-between">

        <div className="flex flex-row w-56 items-center">
          <TbPointFilled size={22}/>
          <legend className="pl-2">Enable underscore:</legend>
        </div>

        <div className="w-32 flex flex-row justify-between">

          <div className="w-13 flex flex-row justify-between">
            <label htmlFor="YesUnderscore">Yes</label>
            <input type="radio" id="YesUnderscore"
              name="containUnderscoreInput" value={"true"}
              checked={currentValidator.containUnderscoreInput === "true"}
              onChange={handleInputChange}/>
          </div>

          <div className="w-13 flex flex-row justify-between">
            <label htmlFor="NoUnderscore">No</label>
            <input type="radio" id="NoUnderscore"
              name="containUnderscoreInput" value={"false"}
              checked={currentValidator.containUnderscoreInput === "false"}
              onChange={handleInputChange}/>
          </div>
        </div>

      </div>

      <button className="bg-buttonColor hover:bg-buttonHover h-10 w-96
        flex flex-row justify-center items-center rounded-full"
        onClick={navigateToPasswordValidator}>Send validator</button>

    </div>
  )
}

export default FormCreateValidator