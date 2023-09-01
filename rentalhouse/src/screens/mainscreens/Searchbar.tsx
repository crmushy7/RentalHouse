import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";

import React from "react";

const Searchbar = () => {
  return (
    <div className="flex justify-center mr-3 w-32 items-center border rounded-lg border-black ">
      <span className="border rounded-lg flex h-full justify-center items-center">
        <InputText
          placeholder="Search..."
          className="search-input h-full w-full justify-center text-center items-center"
        />
      </span>
    </div>
  );
};

export default Searchbar;
