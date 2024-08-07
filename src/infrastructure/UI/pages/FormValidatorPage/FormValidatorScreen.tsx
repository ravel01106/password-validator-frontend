import FormCreateValidator from "../../../../components/FormCreateValidator"
import Title from "../../../../components/Title"

const FormValidatorScreen = () => {

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

export default FormValidatorScreen