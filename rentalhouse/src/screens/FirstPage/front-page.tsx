import { FC } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../lib/color/colors";
import { useGetAllHousesDemoQuery, GetAllHousesDemoQuery } from "../../generated/graphql";
import graphqlRequestClient from "../../lib/clients/GraphqlRequestClients";
import CustomcardAllhouses from "../mainscreens/components/CustomcardAllhouses";
import { Loader } from "@mantine/core";
import CustomButton from "../Authentication/component/custom-buttom";
import Aboutus from "../../Aboutus";

const FrontPage: FC = () => {
  const navigate = useNavigate();

 

    const { isLoading, data } = useGetAllHousesDemoQuery<
      GetAllHousesDemoQuery,
      Error
    >(
      graphqlRequestClient,
      {},
    );



    if (isLoading) return (
      <span className="flex w-full h-full justify-center items-center flex-col">
        <Loader />
        <p>Loading...</p>
        <p className="text-sm italic">Please wait</p>
      </span>
    );
    // if (error) {
    //   const errorMessage = error.response.errors[0].message;

    //   clearUserData();
    //   if (!accessToken) {
    //     navigate("/auth");
    //   }

    //   return (
    //     <span>
    //       <p>{errorMessage}</p>
    //       <button onClick={() => navigate("/auth")}>login</button>
    //     </span>
    //   );
    // }


  const handleLoginButton = () => {
    navigate("/auth");
  };

  const handleSignUpButton = () => {
    navigate("/register");
  };

  // const renderHouses = () => {
  //   return (
  //     <div className="flex flex-row gap-3 overscroll-auto">
  //       {data?.demo.map((item, index) => (
  //          <CustomcardAllhouses key={index} data={item} />
  //       ))}
  //     </div>
  //   );
  // };

  const renderHouses = () => {
    if (!data || !data.demo) {
      return (
        <div className="flex w-full h-full justify-center items-center flex-col">
          <Loader />
          <p>Loading...</p>
          <p className="text-sm italic">Please wait</p>
        </div>
      );
    }

    return (
      <div className="flex flex-row gap-3 overscroll-auto">
        {data.demo.map((item, index) => (
          <CustomcardAllhouses key={index} data={item} />
        ))}
      </div>
    );
  };


  return (
    <div className="flex flex-col w-full h-screen bg-slate-200">
      <div className="flex justify-between">
        {" "}
        <span className="flex justify-end w-1/2  text-blue-600 font-bold">
          <p className="flex sm:text-sm md:text-sm h-full justify-end items-end">
            RENTAL HOUSE
          </p>
        </span>
        <div className="flex flex-row w-2/5  pt-4 px-4 p- justify-end gap-3">
          <CustomButton
            backgroundColor={colors.transparent}
            borderRadius={0}
            name={"Log in"}
            color={colors.lightColor}
            onClick={handleLoginButton}
            fontSize={16}
            border={"none"}
            paddingLeft={0}
            paddingRight={0}
            paddingTop={0}
            paddingBottom={0}
          />
          <CustomButton
            backgroundColor={colors.black}
            borderRadius={30}
            name={"Sign up"}
            color={colors.white}
            onClick={handleSignUpButton}
            fontSize={14}
            border={"none"}
            paddingLeft={8}
            paddingRight={8}
            paddingTop={2}
            paddingBottom={2}
          />
        </div>
      </div>
      <div className="flex flex-col rounded-lg   w-full h-2/4 p-5 sm:flex-row sm:flex sm:w-full sm:h-2/4 sm:p-5">
        <div className="bg-light-blue  rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none w-full h-1/2 flex flex-col justify-center items-center gap-2 sm:w-1/2 sm:h-full sm:flex sm:flex-col sm:gap-2 sm:justify-center sm:items-center 2xl:h-full">
          <p className="text-white font-semibold text-2xl">Rental House</p>
          <p className="text-white flex text-center font-semibold text-2xl">
            Finding apartments without the search.
          </p>
          <div>
            <p className="text-white flex text-center font-normal text-xs">
              Receive apartments directly from landlord-
            </p>
            <p className="text-white flex text-center font-normal text-xs">
              Match to your criteria not somebody else's.
            </p>
          </div>
        </div>
        <img
          className="w-full h-1/2 rounded-b-lg sm:rounded-r-lg sm:rounded-tl-none md:rounded-bl-none 2xl:rounded-bl-none flex justify-center items-center sm:w-1/2 sm:h-full  sm:flex sm:justify-center sm:items-center 2xl:h-full"
          src="https://www.eliteholidayhomes.com.au/wp-content/uploads/2023/07/banner3-1.jpg"
          alt="image"
        />
      </div>
      <div className="h-1/2 flex flex-col">
        <div className="w-full flex">
          <div className="bg-white w-full h-full rounded-lg font-semibold text-xl flex flex-row place-content-between px-5 py-5 mx-5">
            <p>Our Popular Residence</p>
            <a
              href="register"
              className="text-base font-normal"
              onClick={() => navigate("/register")}
            >
              Explore More &#x2192;
            </a>
          </div>
        </div>
        <div className="w-full h-auto flex overflow-auto p-5">
          {renderHouses()}
        </div>
      </div>
      <div className="flex flex-col pt-5">
        <span className="font-bold">About Us</span>
        <Aboutus />
      </div>
    </div>
  );
};

export default FrontPage;
