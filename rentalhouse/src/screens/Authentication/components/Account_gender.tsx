import React, { FC, useState } from 'react'

const Account_gender:FC = () => {
  const [gender,setGender]=useState<string>();
  const{accType,setAccType}=useState<string>();
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
          <input className="hover:cursor-pointer" name='gender' type="radio" value='Male' onChange={e=>setGender(e.target.value)} />
          Male
        </span>
        <span>
          <input className="hover:cursor-pointer" type="radio" value='Female' name='gender' onChange={e=>setGender(e.target.value)} />
          Female
        </span>
      </div>
      <div className="flex flex-col  w-1/2 h-full">
        <span className="font-sans font-bold">Account Type:</span>
        <span>
          <input className="hover:cursor-pointer" name='accType' value='landOwner' type="radio" onChange={e=>setAccType(e.target.value)} />
          Owner
        </span>
        <span>
          <input className="hover:cursor-pointer" value='tenant' type="radio" name='accType' onChange={e=>setAccType(e.target.value)} />
          Tenant
        </span>
      </div>
    </div>
  );
}

export default Account_gender;
