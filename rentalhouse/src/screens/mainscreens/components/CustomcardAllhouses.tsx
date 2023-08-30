import React, { FC } from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Leftpic from '../../../Leftpic.jpg'

const CustomcardAllhouses: FC = (props) => {
  const data = props;
  return (
    <>
      <div className="flex w-56 h-72 border border-black flex-col">
        <div
          style={{
            display: "flex",
            height: "10%",
            width: "full",
            border: "1px solid black",
            justifyContent: "end",
          }}
        >
          <span className="hover:cursor-pointer">
            <span className="text-xs">Add to favorite</span>
            <FavoriteBorderIcon />
          </span>
        </div>

        <div
          style={{
            display: "flex",
            height: "90%",
            width: "full",
            border: "1px solid black",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "75%",
              width: "full",
              border: "1px solid black",
            }}
          >
            <img src={Leftpic} alt="pc" />
          </div>
          <div
            style={{
              display: "flex",
              height: "25%",
              width: "full",
              border: "1px solid red",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span>
              <span>Title:</span>
            </span>
            <span>
              <span>Location:</span>
            </span>
            <span>
              <span>Status:Available</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomcardAllhouses