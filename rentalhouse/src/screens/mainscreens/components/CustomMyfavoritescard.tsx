import React, { FC } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Leftpic from "../../../Leftpic.jpg";

const CustomMyfavoritescard: FC = (props) => {
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
            <span className="text-xs">Remove from favorite</span>
            <FavoriteIcon />
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

export default CustomMyfavoritescard;
