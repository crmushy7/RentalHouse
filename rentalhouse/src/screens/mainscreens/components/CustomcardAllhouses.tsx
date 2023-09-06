import React, { FC } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Leftpic from "../../../Leftpic.jpg";
import { BackgroundImage } from "@mantine/core";
import { useNavigate } from "react-router";

const CustomcardAllhouses: FC = (props) => {
  const navigate = useNavigate();
  const {data}=props;
  const amount = parseInt(data.price)

  
  return (
    <>
      <div  className="flex justify-evenly w-80 h-72 bg-white  shadow-2xl rounded-lg  flex-col">
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
          <div className="flex h-3/4 w-11/12 justify-center ">
            <BackgroundImage
              className="h-full hover:cursor-pointer w-full rounded-lg justify-end items-end flex flex-col"
              src={data.imgUrl[0]}
               onClick={() => navigate('/Detailpage', {replace: true, state: data})}
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
              <span className="font-semibold mt-2">{data.name}</span>
            </span>

            <span>
              <span className="flex w-full justify-center items-center">
                Status:{data.status}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomcardAllhouses;
