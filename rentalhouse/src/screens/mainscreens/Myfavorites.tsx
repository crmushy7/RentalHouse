import React from "react";
import CustomMyfavoritescard from "./components/CustomMyfavoritescard";

const Myfavorites = () => {
  const data = [1, 2, 3, 4,3,3,4,4,5,6,5,4,3,3,3,2,2,6, 2, 1,5,5,5,5,5,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,6,66,6,6,6,6,6,6, 2, 3, 2, 1];

  return (
    <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-2">
      {data?.map((item, index) => (
        <CustomMyfavoritescard key={index} data={item} index={index} />
      ))}
    </div>
  );
};

export default Myfavorites;
