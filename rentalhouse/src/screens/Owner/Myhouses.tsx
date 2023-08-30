import React from "react";
import CustomcardMyhouses from "./components/CustomcardMyhouses";

const Myhouses = () => {
  const data = [1, 2, 3, 4, 2, 1, 2, 3, 2, 1];

  return (
    <div className="flex flex-col justify-center ">
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6  gap-2">
        {data?.map((item, index) => (
          <CustomcardMyhouses key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Myhouses;
