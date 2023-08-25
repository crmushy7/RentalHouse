import { FC, useEffect, useState } from "react";


const useRegister = () => {
    const [data,setData]=useState<Array<Custominputprops>>();
    useEffect(()=>{
         setData ( [
          {
            labeled: "First Name",
            inputType: "text",
            placeholder: "Write your first name",
          },
          {
            labeled: "Middle Name",
            inputType: "text",
            placeholder: "Write your middle name",
          },
          {
            labeled: "Last Name",
            inputType: "text",
            placeholder: "Write your last name",
          },
          {
            labeled: "Email",
            inputType: "email",
            placeholder: "Write your email",
          },
          {
            labeled: "Phone Number",
            inputType: "number",
            placeholder: "Write your phone number",
          },
          {
            labeled: "Password",
            inputType: "password",
            placeholder: "Write your password",
          },
          {
            labeled: "Confirm Password",
            inputType: "password",
            placeholder: "Confirm your password",
          },
          
        ])
    })
  return [data]
}

export default useRegister;