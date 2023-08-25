import React, { FC } from 'react'
import { useNavigate } from 'react-router'

const CustomButton: FC<CustomButtonprop> = ({title,navigateTo,background}) => {
  const navigate=useNavigate();
  return (
    <div className="flex justify-center items-center w-full animate-pulse">
      <button
        className="rounded-2xl"
        style={{
          backgroundColor: background,
          padding: "3%",
          marginBottom: "1%",
          border:"1px solid black"
        }}
        onClick={() => navigate(navigateTo)}
      >
        <span >{title}</span>
      </button>
    </div>
  );
}

export default CustomButton