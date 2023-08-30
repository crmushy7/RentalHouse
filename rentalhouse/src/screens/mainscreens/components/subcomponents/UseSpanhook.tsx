import { FC, useEffect, useState } from "react";
import CustomSpandiv from './CustomSpandiv';

const spanHook = () => {
  const [data, setData] = useState<Array<CustomSpandiv>>();
  useEffect(() => {
    setData([
      {
        labeled: "First Name",
        inputType: "text",
        placeholder: "first name",
      },
      {
        labeled: "Middle Name",
        inputType: "text",
        placeholder: " your middle name",
      },
      {
        labeled: "Last Name",
        inputType: "text",
        placeholder: " your last name",
      },
      {
        labeled: "Email",
        inputType: "email",
        placeholder: " your email",
      },
      {
        labeled: "Phone Number",
        inputType: "number",
        placeholder: " phone number",
      },
    ]);
  });
  return [data];
};

export default spanHook;
