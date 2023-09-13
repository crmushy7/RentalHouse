import React, { FC } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Leftpic from "../../../Leftpic.jpg";
import { BackgroundImage, Tooltip } from "@mantine/core";
import { useNavigate } from "react-router";

const CustomcardAllhouses: FC = (props) => {
  const navigate = useNavigate();
  const { data } = props;
  const amount = parseInt(data.price);

  return (
    <>
      <div className="flex justify-center w-96 h-72 md:w-48 lg:w-72 xl:w-52 2xl:w-64 bg-white items-center  shadow-2xl rounded-lg  flex-col">
        <div className="flex flex-col items-center h-5/6 w-11/12  justify-center rounded-xl">
          <div className="flex h-3/4 w-11/12 justify-center items-center ">
            <Tooltip label="Click to see details and book!">
              <BackgroundImage
                className="h-full hover:cursor-pointer w-full rounded-lg justify-end items-end flex flex-col"
                src={data.imgUrl[0]}
                onClick={() =>
                  navigate("/Detailpage", { replace: true, state: data })
                }
              >
                {/* <span className=" w-full rounded-full h-10 justify-end flex">
                <span className="w-7 hover:cursor-pointer flex shadow-2xl rounded-full h-7 justify-center items-center bg-white">
                  <FavoriteBorderIcon />
                </span>
              </span> */}
                <span className="flex w-full justify-end items-end">
                  <span className="w-auto mr-2 mb-3 bg-white">${amount}</span>
                </span>
              </BackgroundImage>
            </Tooltip>

            {/* <img className="rounded-lg" src={Leftpic} alt="pc" /> */}
          </div>
          <div className="flex h-1/6 w-full justify-center items-center flex-col">
            <span>
              <span className="font-semibold mt-2">{data.name}</span>
            </span>

            <span>
              <span className="flex w-full justify-center items-center">
                Status:{data?.status}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomcardAllhouses;
