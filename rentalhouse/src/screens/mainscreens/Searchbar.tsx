import { TextInput } from "@mantine/core";
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";

import { IconSearch } from "@tabler/icons-react";
import React, { FC, useState } from "react";

type SearchbarProps = {
  onChange: (value: string) => void;
};

const Searchbar: FC<SearchbarProps> = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="flex justify-center mr-3 w-32 items-center  rounded-lg  ">
      {/* <span className="border rounded-lg flex h-full justify-center items-center">
        <InputText
          placeholder="Search..."
          className="search-input h-full w-full justify-center text-center items-center"
        />
      </span> */}
      <TextInput
        value={value}
        placeholder="Search"
        icon={<IconSearch size="1rem" />}
        styles={{}}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Searchbar;
