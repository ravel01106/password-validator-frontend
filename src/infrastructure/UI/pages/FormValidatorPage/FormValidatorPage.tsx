
import Title from "../../shared/Title"
import FormCreateValidator from "./components/FormCreateValidator"

const FormValidatorPage = () => {

  return (
    <div className="-mainContainerWidth
    h-mainContainerHeigth
    flex
    flex-col items-center justify-evenly">
      <Title title="Create your custom validator" />
      <FormCreateValidator />
    </div>
  )
}

export default FormValidatorPage