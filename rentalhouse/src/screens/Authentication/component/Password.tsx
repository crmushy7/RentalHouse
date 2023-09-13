// import React, { useState } from "react";
// import { Password } from "primereact/password";
// import { Divider } from "primereact/divider";

import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import React, { FC, useState } from "react"
import { CustomInputFieldProps } from "../type/type";

// export default function TemplateDemo() {
//   const [value, setValue] = useState<string>("");
//   const header = <div className="font-bold mb-3">Pick a password</div>;
//   const footer = (
//     <>
//       <Divider />
//       <p className="mt-2">Suggestions</p>
//       <ul className="pl-2 ml-2 mt-0 line-height-3">
//         <li>At least one lowercase</li>
//         <li>At least one uppercase</li>
//         <li>At least one numeric</li>
//         <li>Minimum 8 characters</li>
//       </ul>
//     </>
//   );

//   return (
//     <div className="card w-full flex justify-content-center">
//       <Password
//       toggleMask
//         className="w-full"
//         inputStyle={{ width: "100%" }}
//         value={value}
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//           setValue(e.target.value)
//         }
//         header={header}
//         footer={footer}
//       />
//     </div>
//   );
// }

import "primeicons/primeicons.css";
        
 const PasswordInput : FC<CustomInputFieldProps> = ({
  backgroundColor,
  border,
  borderRadius,
  fontSize,
  onChange,
  padding,
  placeholder,
  type,
  width,
}) => {
  const [value, setValue] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
    };
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? (
            <i className="pi pi-eye-slash"/>
          ) : (
            <i className="pi pi-eye"/>
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
export default PasswordInput;