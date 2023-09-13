
import CustomEditHouse from './components/CustomEditHouse';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Leftpic from '../../Leftpic.jpg';
import { BackgroundImage } from "@mantine/core";
import CustomEditCard from './CustomSmallcard';
import { useLocation } from 'react-router';

const EditHouse = () => {
  const {state}=useLocation();
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex flex-col rounded-lg   w-full h-5/6  md:h-5/6 p-5 sm:flex-col sm:flex sm:w-full sm:h-full sm:p-5 md:flex-row lg:flex-row 2xl:flex-row lg:h-5/6 2xl:h-5/6 border border-black">
        <div className="flex w-full h-1/2 lg:h-full sm:h-1/2 md:h-full 2xl:h-full border flex-col">
          <div className="flex w-full h-1/2 border flex-col">
            <BackgroundImage
              className="h-full w-full rounded-lg justify-between flex flex-col"
              src={state?.data.imgUrl[0]}
            >
              <span className="flex w-full justify-end items-end"></span>
            </BackgroundImage>
          </div>

          <div className="flex h-1/2 w-full border flex-col overflow-auto mt-4">
            <div className=" w-auto  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4  gap-3 h-5/6">
              {state?.data.imgUrl.map((item, index) => (
                <CustomEditCard data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full 2xl:h-full sm:h-full h-full justify-center overflow-auto overscroll-auto items-center border">
          {" "}
          <CustomEditHouse data={state} />
        </div>
      </div>
    </div>
  );
}

export default EditHouse