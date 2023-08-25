import React, { FC } from 'react'
import { useNavigate } from 'react-router'

const CustomButton: FC<CustomButtonprop> = ({title,navigateTo,background}) => {
  const navigate=useNavigate();
  return (
    <div className='flex justify-center items-center w-full animate-pulse'>
    <button className='rounded-full' style={{
        backgroundColor:background,
        padding:"1%",
        marginBottom:"1%"
    }} onClick={()=>navigate(navigateTo)}>{title}</button></div>
  )
}

export default CustomButton