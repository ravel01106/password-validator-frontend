import { TitleProp } from "../interfaces/TitleProps"

const Title = ({title}:TitleProp) => {
  return (
    <div className='bg-titleColor w-subContainerWidth h-36 flex items-center rounded-medium'>
      <h2 className="text-4xl font-bold">
        {title}
      </h2>
    </div>
  )
}

export default Title