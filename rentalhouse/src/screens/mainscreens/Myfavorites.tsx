import React from "react";
import CustomMyfavoritescard from "./components/CustomMyfavoritescard";

const Myfavorites = () => {
  const data = [1, 2, 3, 4, 2, 1, 2, 3, 2, 1];

  return (
    <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-3">
      {data?.map((item, index) => (
        <CustomMyfavoritescard key={index} data={item} index={index} />
      ))}
    </div>
  );
};

export default Myfavorites;
