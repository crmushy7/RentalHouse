import React, { FC } from "react";
import Rental from "../../assets/images/Rental.jpeg";
import Account_gender from "../Authentication/components/Account_gender";
import CustomButton from "../Authentication/components/CustomButton";
import CustomLink from "../Authentication/components/CustomLink";
import Custominput from "../Authentication/components/Custominput";
import UseAddHouse from "./components/UseAddHousehook";

const AddHouse: FC = () => {
  const [data] = UseAddHouse();
  return (
    <>
      <div
        className="flex flex-col h-full  justify-evenly items-center"
        style={{}}
      >
        <div className="flex flex-row justify-center items-center h-auto w-auto   bg-white rounded-full ">
          <img
            className="flex rounded-full shadow-xl "
            src={Rental}
            alt="pc"
            style={{
              padding: "0%",
            }}
          />
        </div>
        <div
          className="flex flex-col justify-center  h-auto w-full  bg-white rounded-lg shadow-2xl"
          style={{ marginTop: "2%", marginBottom: "2" }}
        >
          <span className="flex underline justify-center items-center text-blue-600 w-full font-bold">
            FILL YOUR DETAILS BELOW TO JOIN THE NETWORK!!
          </span>
          {data?.map((item) => {
            return (
              <Custominput
                labeled={item.labeled}
                inputType={item.inputType}
                placeholder={item.placeholder}
              />
            );
          })}
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              padding: "4%",
            }}
          >
            <CustomButton
              title="Add Photos"
              navigateTo=""
              background="#708090"
            />
            <CustomButton
              title="Upload House"
              navigateTo=""
              background="#708090"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddHouse;
