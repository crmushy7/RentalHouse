import React, { FC } from 'react'

const Account_gender:FC = () => {
  return (
    <div
      className="flex flex-row  h-auto w-full "
      style={{
        marginTop: "5%",
      }}
    >
      <div
        className="flex flex-col   w-1/2 h-full"
        style={{
          marginLeft: "5%",
        }}
      >
        <span className="font-sans font-bold ">Gender:</span>
        <span>
          <input className="hover:cursor-pointer" type="radio" checked />
          Male
        </span>
        <span>
          <input className="hover:cursor-pointer" type="radio" />
          Female
        </span>
      </div>
      <div className="flex flex-col  w-1/2 h-full">
        <span className="font-sans font-bold">Account Type:</span>
        <span>
          <input className="hover:cursor-pointer" type="radio" checked />
          Owner
        </span>
        <span>
          <input className="hover:cursor-pointer" type="radio" />
          Tenant
        </span>
      </div>
    </div>
  );
}

export default Account_gender;
