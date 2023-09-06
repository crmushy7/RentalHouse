import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HouseProps } from "./components/house-type";
import { HOUSE } from "./house";
import HouseUI from "./components/houseUI";
import colors from "../../lib/color/colors";
import CustomButton from "../Authentication/component/custom-buttom";
import { useGetAllHousesQuery, GetAllHousesQuery } from "../../generated/graphql";
import graphqlRequestClient from "../../lib/clients/GraphqlRequestClients";
import { getUserAccessToken } from "../../utils/localStorageUtils";
import CustomcardAllhouses from "../mainscreens/components/CustomcardAllhouses";

const FrontPage: FC = () => {
  const navigate = useNavigate();

  const [houses, setHouses] = useState<HouseProps[]>(HOUSE);
  
    const [accessToken, setAccessToken] = useState<string | null>(
      getUserAccessToken()
    );
    const [shouldFetchData, setShouldFetchData] = useState(false);

    useEffect(() => {
      console.log(accessToken);
      if (accessToken) {
        setShouldFetchData(true);
      }
    }, [accessToken]);

    const { isLoading, error, data, refetch } = useGetAllHousesQuery<
      GetAllHousesQuery,
      Error
    >(
      graphqlRequestClient.setHeaders({
        Authorization: `Bearer ${accessToken}`,
      }),
      {},
      { enabled: shouldFetchData }
    );

    useEffect(() => {
      if (accessToken && shouldFetchData) {
        refetch();
      }
    }, [accessToken, shouldFetchData, refetch]);

    if (!accessToken) {
      return <p>Please log in to view your houses.</p>;
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) {
      const errorMessage =
        error.response &&
        error.response.errors &&
        error.response.errors.length > 0
          ? error.response.errors[0].message.message
          : "An error occurred";
      return <p>{errorMessage}</p>;
    }


  const handleLoginButton = () => {
    navigate("/auth");
  };

  const handleSignUpButton = () => {
    navigate("/register");
  };

  const renderHouses = () => {
    return (
      <div className="flex flex-row gap-3 overscroll-auto">
        {data?.houses.map((item, index) => (
          <CustomcardAllhouses key={index} data={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-screen bg-slate-200">
      <div className="flex flex-row  pt-4 px-4 p- justify-end gap-3">
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
      <div className="flex flex-col rounded-lg  w-full h-2/4 p-5 sm:flex-row sm:flex sm:w-full sm:h-2/4 sm:p-5">
        <div className="bg-light-blue rounded-tl-lg rounded-bl-lg w-full h-1/2 flex flex-col justify-center items-center gap-2 sm:w-1/2 sm:h-full sm:flex sm:flex-col sm:gap-2 sm:justify-center sm:items-center 2xl:h-full">
          <p className="text-white font-semibold text-2xl">Rental House</p>
          <p className="text-white flex text-center font-semibold text-2xl">
            Finding apartments without the seasrch.
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
          className="w-full h-1/2 rounded-lg flex justify-center items-center sm:w-1/2 sm:h-full  sm:flex sm:justify-center sm:items-center 2xl:h-full"
          src="https://www.eliteholidayhomes.com.au/wp-content/uploads/2023/07/banner3-1.jpg"
          alt="image"
        />
      </div>
      <div className="h-1/2 flex flex-col">
        <div className="w-full flex">
          <div className="bg-white w-full h-full rounded-lg font-semibold text-xl flex flex-row place-content-between px-5 py-5 mx-5">
            <p>Our Popular Residence</p>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-normal"
            >
              Explore More &#x2192;
            </a>
          </div>
        </div>
        <div className="w-full h-full flex overflow-auto p-5">
          {renderHouses()}
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
