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
    <div className="flex h-screen flex-col w-full justify-center items-center border border-black overflow-auto">
      <span className="font-bold text-blue-700 text-2xl ">
        <p>HOUSE DETAILS</p>
      </span>
      <div className="h-5/6 flex w-5/6 flex-col  rounded-lg sm:flex sm:flex-col md:flex-row  2xl:flex-row xl:flex-row">
        <div className="flex w-full   sm:w-full 2xl:w-1/2  xl:w-1/2 md:w-full  h-5/6 sm:h-2/3 2xl:h-full xl:h-full md:h-full  flex-col overflow-auto">
          <div className="flex w-full h-1/2  flex-col">
            <BackgroundImage
              className="h-full w-full rounded-lg justify-end flex flex-col"
              src={state.imgUrl[0]}
            >
              <span className="flex w-full justify-end items-end">
                <span className="w-10 mr-2 mb-3 bg-white"></span>
              </span>
            </BackgroundImage>
          </div>

          <div className="flex h-1/2 w-full  flex-col overflow-auto mt-4">
            <div className=" grid grid-cols-2 sm:grid-cols-3  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  gap-2">
              {state?.imgUrl.map((item, index) => (
                <CustomEditCard data={item} />
              ))}
            </div>
          </div>
        </div>
        <div  className="flex w-full  sm:w-full sm:h-full sm:overflow-auto 2xl:w-1/2 xl:w-1/2 md:w-full h-full  flex-col overflow-auto "
        >
          {" "}
          <CustomDetails data={state} />
        </div>
      </div>
    </div>
  );
};

export default DetailedHouse;
