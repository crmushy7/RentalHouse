import React, { FC } from 'react'

const CustomLink:FC<CustomLinkprop> = ({title,linkto}) => {
  return (
    <>
    <a className='text-blue-600 font-sans text-sm italic' style={{
        marginTop:"2%",
        marginLeft:"5%"
    }} href={linkto}>{title}</a>
    </>
  )
}

export default CustomLink;