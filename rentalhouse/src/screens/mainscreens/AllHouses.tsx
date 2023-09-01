import React from "react";
import CustomcardAllhouses from "./components/CustomcardAllhouses";
import { AspectRatio } from "@chakra-ui/react";

const AllHouses = () => {
  const data = [1, 2, 1];

  return (
    <div className="  flex flex-col">
      <div className="flex justify-between">
        <span className="font-semibold ml-4">Popular of the week</span>
        <span className="text-blue-600 hover:cursor-pointer mr-4">
          See More..
        </span>
      </div>
      <div className="overflow-auto flex flex-row gap-3 p-3 rounded-lg">
        {data?.map((item, index) => (
          <CustomcardAllhouses key={index} data={item} />
        ))}
      </div>
      <div className="flex w-full justify-end"></div>
      <div className="flex w-full justify-between mt-6 ">
        <span className="font-semibold ml-2">Find the nearest of you</span>
        <span className="text-blue-600 hover:cursor-pointer mr-4 pi pi-map-marker">
          Tanzania
        </span>
      </div>

      <div className="mt-2 ml-2">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915240.238831549!2d34.38997995660026!3d-6.369028372361037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1837444276a7c97b%3A0xd456a925e701ac1e!2sTanzania!5e0!3m2!1sen!2sus!4v1567723392506!5m2!1sen!2sus"
            style={{ width: "100%", height: "45vh" }}
            className="rounded-lg"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default AllHouses;
