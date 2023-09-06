import { BackgroundImage } from '@mantine/core';
import React from 'react'
import Leftpic from "../../Leftpic.jpg";
import { useLocation } from 'react-router';
const CustomEditCard = (props) => {
  const data =props;
  const {state}=useLocation();
  console.log(data)
  return (
    <div className='flex h-32'>
      {" "}
      <BackgroundImage
        className="h-full w-full rounded-lg justify-between flex flex-col"
        src={data.data}
      >
       
      </BackgroundImage>
    </div>
  );
}

export default CustomEditCard