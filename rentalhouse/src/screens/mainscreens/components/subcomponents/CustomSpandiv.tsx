import { FC } from "react"

const CustomSpandiv :FC<Custominputprops> = ({labeled,inputType,placeholder}) => {
  return (
    <div style={{border:"1px solid white",marginTop:'5%'}} className="bg-white shadow-xl"><span className="font-bold ">{labeled}:</span><span>{placeholder}</span></div>
  )
}

export default CustomSpandiv