import Title from "../components/Title"
import { TbPointFilled } from "react-icons/tb";

const FormValidatorScreen = () => {

  return (
    <div className="-mainContainerWidth
    h-mainContainerHeigth
    flex
    flex-col items-center justify-evenly">

      <Title title="Create your custom validator" />

      <div className="bg-white text-black
      w-formContainerWidth h-formContainerHeigth rounded-medium
      flex flex-col items-center justify-around py-2 text-xl">

        <div className="w-96 flex flex-row justify-between">

          <div className="flex flex-row w-56 items-center">
            <TbPointFilled size={22}/>
            <label htmlFor="lengthValid" className="pl-2">Minimum length:</label>
          </div>

          <input type="number" id="lengthValid"
            name="lengthValid" min={0} max={100} value={0}
            className="bg-white border border-black" />

        </div>

        <div className="w-96 flex flex-row justify-between">

          <div className="flex flex-row w-56 items-center">
            <TbPointFilled size={22}/>
            <legend className="pl-2">Enable uppercase:</legend>
          </div>

          <div className="w-32 flex flex-row justify-between">
            <div className="w-13 flex flex-row justify-between">
              <label htmlFor="YesUppercase">Yes</label>
              <input type="radio" name="uppercase"
                value={"true"} id="YesUppercase" />
            </div>

            <div className="w-13 flex flex-row justify-between">
              <label htmlFor="NoUppercase">No</label>
              <input type="radio" name="uppercase"
                id="NoUppercase" value={"false"} />
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
              <input type="radio" name="lowercase"
                id="YesLowercase" value={"true"} />
            </div>

            <div className="w-13 flex flex-row justify-between">
              <label htmlFor="NoLowercase">No</label>
              <input type="radio" name="lowercase"
                id="NoLowercase" value={"false"} />
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
                name="number" value={"true"} />
            </div>

            <div className="w-13 flex flex-row justify-between">
              <label htmlFor="NoNumber">No</label>
              <input type="radio" id="NoNumber"
                name="number" value={"false"} />
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
                name="underscore" value={"true"} />
            </div>

            <div className="w-13 flex flex-row justify-between">
              <label htmlFor="NoUnderscore">No</label>
              <input type="radio" id="NoUnderscore"
                name="underscore" value={"false"} />
            </div>
          </div>

        </div>

        <div className="bg-buttonColor hover:bg-buttonHover h-10 w-96 flex flex-row justify-center rounded-full">
          <button>Send validator</button>
        </div>

      </div>

    </div>
  )
}

export default FormValidatorScreen