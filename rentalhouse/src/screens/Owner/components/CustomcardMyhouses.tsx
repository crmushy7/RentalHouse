import React, { FC } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Leftpic from "../../../Leftpic.jpg";
import { BackgroundImage } from "@mantine/core";

const CustomcardMyhouses: FC = (props) => {
  const data = props;
  return (
    <>
      <div className="flex justify-evenly w-56 lg:w-48 xl:w-48 md:w-52 sm:w-52 h-72 rounded-xl shadow-2xl  flex-col">
        <div
          style={{
            display: "flex",
            height: "90%",
            width: "full",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="rounded-xl"
        >
          <div
            style={{
              display: "flex",
              height: "95%",
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BackgroundImage
              className="h-full w-full rounded-lg justify-between flex flex-col"
              src={Leftpic}
            >
              <span className=" w-full rounded-full h-10 justify-end flex">
                <span className="w-7 hover:cursor-pointer flex shadow-2xl rounded-full h-7 justify-center items-center bg-white">
                  <FavoriteBorderIcon />
                </span>
              </span>
              <span className="flex w-full justify-end items-end">
                <span className="w-10 mr-2 mb-3 bg-white">$500</span>
              </span>
            </BackgroundImage>
            {/* <img className="rounded-lg" src={Leftpic} alt="pc" /> */}
          </div>
          <div
            style={{
              display: "flex",
              height: "25%",
              width: "full",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span>
              <span className="font-semibold mt-2">Mushi Apartment</span>
            </span>

            <span>
              <span className="flex w-full justify-center items-center">
                Status:Available
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomcardMyhouses;
