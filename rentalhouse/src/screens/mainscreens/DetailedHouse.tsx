import CustomEditHouse from "../Owner/components/CustomEditHouse";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Leftpic from "../../Leftpic.jpg";
import { BackgroundImage } from "@mantine/core";
import CustomEditCard from "../Owner/CustomSmallcard";
import CustomDetails from "./components/CustomDetailes";
import { useLocation, useParams } from "react-router-dom";

const DetailedHouse = () => {
  const params = useParams();
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="flex h-screen flex-col w-full justify-center items-center">
      <span className="font-bold">HOUSE DETAILS</span>
      <div className="h-5/6 flex w-5/6 border rounded-lg">
        <div className="flex w-1/2 h-full border flex-col">
          <div className="flex w-full h-1/2 border flex-col">
            <BackgroundImage
              className="h-full w-full rounded-lg justify-end flex flex-col"
              src={state.imgUrl[0]}
            >
              <span className="flex w-full justify-end items-end">
                <span className="w-10 mr-2 mb-3 bg-white"></span>
              </span>
            </BackgroundImage>
          </div>

          <div className="flex h-1/2 w-full border flex-col overflow-auto mt-4">
            <div className=" grid grid-cols-2 sm:grid-cols-3  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6  gap-2">
              {state?.imgUrl.map((item, index) => (
              <CustomEditCard data={item}/>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-1/2 h-full justify-center overflow-hidden items-center border">
          {" "}
          <CustomDetails data={state} />
        </div>
      </div>
    </div>
  );
};

export default DetailedHouse;
