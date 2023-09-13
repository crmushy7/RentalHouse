import  { useEffect, useState } from "react";
import CustomcardAllhouses from "./components/CustomcardAllhouses";
import { AspectRatio } from "@chakra-ui/react";
import {
  useGetAllHousesQuery,
  GetAllHousesQuery,
} from "../../generated/graphql";
import graphqlRequestClient from "../../lib/clients/GraphqlRequestClients";
import { getUserAccessToken } from "../../utils/localStorageUtils";
import { Loader } from "@mantine/core";
import Searchbar from "./Searchbar";

const AllHouses = () => {
  const [accessToken, setAccessToken] = useState<string | null>(
    getUserAccessToken()
  );
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const [filteredData, setFiltereddata] = useState<
    GetAllHousesQuery["houses"][0][]
  >([]);
  const [searchLength, setSearchLength] = useState<number>(0);

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken)
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

  if (isLoading)
    return (
      <span className="flex w-full h-full justify-center items-center flex-col">
        <Loader />
        <p>Loading...</p>
        <p className="text-sm italic">Please wait</p>
      </span>
    );
  if (error) {
    const errorMessage ="An error occurred"
    return <p>{errorMessage}</p>;
  }

  const handleOnSearch = (value: string) => {
    setSearchLength(value.length);
    if (data) {
      const filtered: GetAllHousesQuery["houses"][0][] = data.houses.filter(
        (house: GetAllHousesQuery["houses"][0]) =>
          house.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
          house.Region.toLocaleLowerCase().includes(
            value.toLocaleLowerCase()
          ) ||
          house.District.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setFiltereddata(filtered);
    } else {
      setFiltereddata([]);
    }
  };

  return (
    <div className="  flex flex-col justify-center items-center ">
      <div className="flex justify-between w-full">
        <span className="font-semibold ml-4">Popular of the week</span>
        <span className="text-blue-600 hover:cursor-pointer mr-4">...</span>
        <Searchbar onChange={handleOnSearch} />
      </div>
      <div className="h-5/6 w-full items-center justify-center mx-9  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5  gap-3">
        {/* <div className="flex flex-row gap-3 overscroll-auto"> */}

        {filteredData.length === 0 && searchLength !== 0 ? (
          <div>no data</div>
        ) : searchLength === 0 ? (
          data?.houses.map((item, index) => (
            <CustomcardAllhouses key={index} data={item} />
          ))
        ) : (
          filteredData.map((item, index) => (
            <CustomcardAllhouses key={index} data={item} />
          ))
        )}

        {/* </div> */}
      </div>
      <div className="flex w-full justify-end"></div>
      <div className="flex w-full justify-between mt-6 ">
        <span className="font-semibold ml-2  ">Find the nearest of you</span>
        <span className="text-blue-600 hover:cursor-pointer mr-4 pi pi-map-marker">
          Tanzania
        </span>
      </div>

      <div className="mt-2 h-full w-full   ml-2">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915240.238831549!2d34.38997995660026!3d-6.369028372361037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1837444276a7c97b%3A0xd456a925e701ac1e!2sTanzania!5e0!3m2!1sen!2sus!4v1567723392506!5m2!1sen!2sus"
            className="rounded-lg w-full h-full"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default AllHouses;
