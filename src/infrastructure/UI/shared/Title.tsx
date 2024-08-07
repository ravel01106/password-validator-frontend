import { TitleProp } from "./TitleProps"

const Title = ({title}:TitleProp) => {
  return (
    <div className='text-center bg-titleColor w-subContainerWidth h-36 flex items-center justify-center rounded-medium'>
      <h2 className="text-4xl font-bold text-center">
        {title}
      </h2>
    </div>
  )
}

export default Title