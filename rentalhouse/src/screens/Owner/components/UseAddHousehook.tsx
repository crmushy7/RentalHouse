import { FC, useEffect, useState } from "react";

const UseAddHouse = () => {
  const [data, setData] = useState<Array<Custominputprops>>();
  useEffect(() => {
    setData([
      {
        labeled: "HOUSE REGION",
        inputType: "text",
        placeholder: "Write your house region",
      },
      {
        labeled: "HOUSE DISTRICT",
        inputType: "text",
        placeholder: "Write your house ward",
      },
      {
        labeled: "HOUSE WARD",
        inputType: "text",
        placeholder: "Write your last name",
      },
      {
        labeled: "PRICE",
        inputType: "number",
        placeholder: "Write your price per month",
      },
      {
        labeled: "DESCRIPTION",
        inputType: "text",
        placeholder: "Write your house description",
      },

      {
        labeled: "HOUSE PICTURE",
        inputType: "text",
        placeholder: "Add your house pictures",
      },
    ]);
  });
  return [data];
};

export default UseAddHouse;
