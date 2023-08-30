import React from 'react'
import CustomcardAllhouses from './components/CustomcardAllhouses'

const AllHouses = () => {
  const data = [1, 2, 3, 4, 2, 1, 2, 3, 2, 1];

  return (
    <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6  gap-2">
      hello
      {data?.map((item, index) => (
        <CustomcardAllhouses key={index} data={item} index={index} />
      ))}
    </div>
  );

}

export default AllHouses;