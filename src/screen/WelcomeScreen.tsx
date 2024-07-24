import Title from "../components/Title"

const WelcomeScreen = () => {
  return (
    <div className='w-mainContainerWidth
    h-mainContainerHeigth
    flex
    flex-col items-center justify-evenly
    '>
      <div className='text-center'>
        <Title title="Welcome to password validator app !!!"/>
        <p className='text-white mt-6 text-lg'>
          Choose one of the following options:
        </p>
      </div>
      <div className='w-buttonsContainerWidth h-96 flex flex-row justify-around items-center'>
        <button className="w-44 h-24 bg-buttonColor hover:bg-buttonHover text-black text-2xl rounded-lg">
          Create custom validator
        </button>
        <button className="w-44 h-24 bg-buttonColor hover:bg-buttonHover text-black text-2xl rounded-lg">
          Get default validator
        </button>
      </div>

    </div>
  )
}

export default WelcomeScreen