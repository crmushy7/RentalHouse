import React, { FC } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Leftpic from "../../../Leftpic.jpg";
import { BackgroundImage, Tooltip } from "@mantine/core";
import { useLocation, useNavigate } from "react-router";

const CustomcardMyhouses: FC = (props) => {
  const data = props;
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center w-96 sm:w-52 md:w-52 lg:w-48 xl:w-48 2xl:w-64 shadow-2xl rounded-xl  h-72">
        <div  className="flex flex-col items-center h-5/6 w-11/12 justify-center rounded-xl"
        >
          <div className="flex h-5/6 w-full justify-center "
          >
            <Tooltip label="Click to edit">
              <BackgroundImage
                className="h-full hover:cursor-pointer w-full rounded-lg justify-between flex flex-col"
                src={data?.data.imgUrl[0]}
                onClick={() =>
                  navigate("/Edithouse/", { replace: true, state: data })
                }
              >
                {/* <span className=" w-full rounded-full h-10 justify-end flex">
                <span className="w-7 hover:cursor-pointer flex shadow-2xl rounded-full h-7 justify-center items-center bg-white">
                  <FavoriteBorderIcon />
                </span>
              </span> */}
                <span className="flex w-full justify-end items-end">
                  <span className="w-10 mr-2 mb-3 bg-white"></span>
                </span>
              </BackgroundImage>
            </Tooltip>

            {/* <img className="rounded-lg" src={Leftpic} alt="pc" /> */}
          </div>
          <div className="flex h-1/6 w-full justify-center items-center flex-col"
          >
            <span>
              <span className="font-semibold mt-2 flex w-full">{data?.data.name}</span>
            </span>

            <span>
              <span className="flex w-full justify-center items-center">
                Status:{data?.data.status}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomcardMyhouses;
