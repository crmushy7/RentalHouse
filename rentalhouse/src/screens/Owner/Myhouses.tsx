// import React, { useState } from "react";
// import CustomcardMyhouses from "./components/CustomcardMyhouses";
// import { useQueryClient } from "@tanstack/react-query";
// import { GraphQLError } from "graphql";
// import { useLoginUserInputMutation, LoginUserInputMutation } from "../../generated/graphql";
// import graphqlRequestClient from "../../lib/clients/GraphqlRequestClients";
// import { saveUserData } from "../../utils/localStorageUtils";

// const Myhouses = () => {
//   const data = [1, 2, 3, 4, 2, 1, 2, 3, 2, 1];
//   const [graphQLError, setGraphQLError] = useState<string | null>(null);

//   const queryClient = useQueryClient();

//   const { mutate } = useLoginUserInputMutation(graphqlRequestClient, {
//     onSuccess: (data: LoginUserInputMutation) => {
//       queryClient.invalidateQueries(["LoginUserInput"]);
//       saveUserData(data);
//       console.log(data.login.user.accountType);
//       const accounttype = data.login.user.accountType;
//       return
//     },
//     onError: (error: GraphQLError) => {
//       // const errorMessage = Array.isArray(
//       //   error.response.errors[0].message.message
//       // )
//       //   ? error.response.errors[0].message.message.join(", ")
//       //   : error.response.errors[0].message.message;
//       const errorMessage = error.response.errors[0].message;
//       setGraphQLError(errorMessage);
//       console.log(errorMessage);

//     },
//   });

//   return (
//     <div className="flex flex-col justify-center ">
//       <div className=" grid grid-cols-2 sm:grid-cols-3  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6  gap-2">
//         {data?.map((item, index) => (
//           <CustomcardMyhouses key={index} data={item} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Myhouses;

import { FC, useEffect, useState } from "react";
import { getUserAccessToken } from "../../utils/localStorageUtils";
import graphqlRequestClient from "../../lib/clients/GraphqlRequestClients";
import { GetMyHousesQuery, useGetMyHousesQuery } from "../../generated/graphql";
import CustomcardMyhouses from "./components/CustomcardMyhouses";
import { Loader } from "@mantine/core";
import Searchbar from "../mainscreens/Searchbar";
import NewHouse from "./NewHouse";

const myHouse: FC = () => {
  const [showBookhouse, setShowBookhouse] = useState(false);
  const [housediv, setHousediv] = useState(false);
  const [initialError, setInitialError] = useState("No Error");
  const [accessToken, setAccessToken] = useState<string | null>(
    getUserAccessToken()
  );
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const [filteredData, setFiltereddata] = useState<
    GetMyHousesQuery["myHouse"][0][]
  >([]);
  const [searchLength, setSearchLength] = useState<number>(0);

  useEffect(() => {
    if (accessToken) {
      setShouldFetchData(true);
    }
  }, [accessToken]);

  const { isLoading, error, data, refetch } = useGetMyHousesQuery<
    GetMyHousesQuery,
    Error
  >(
    graphqlRequestClient.setHeaders({ Authorization: `Bearer ${accessToken}` }),
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
     const errorMessage = error.response.errors[0].message;
     setInitialError(errorMessage);
   }

  const handleOnSearch = (value: string) => {
    setSearchLength(value.length);
    if (data) {
      const filtered: GetMyHousesQuery["myHouse"][0][] = data.myHouse.filter(
        (house: GetMyHousesQuery["myHouse"][0]) =>
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
  const addHouse = () => {
    setShowBookhouse(true);
    setShowBookhouse(true);
  };
  const handleCancelBookhouse = () => {
    setShowBookhouse(false); // Close the Bookhouse component
  };

  return (
    <div>
      <h1 className="flex w-full justify-center items-center text-blue-600">
        MY HOUSES
      </h1>
      <div className="flex flex-col">
        <div className="flex justify-between items-end w-full">
          <div className="flex h-9 text-center  justify-center items-center mr-2">
            <button
              className="flex border border-slate-200 text-center rounded-md p-2 pi pi-plus bg-blue-500  "
              onClick={addHouse}
            >
              Add House
            </button>
          </div>

          <Searchbar onChange={handleOnSearch} />
        </div>
        {initialError !== "No Error" ? (
          <div>{initialError}</div>
        ) : (
          <div className="h-5/6 w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  gap-3">
            {filteredData.length === 0 && searchLength !== 0 ? (
              <div>no data</div>
            ) : searchLength === 0 ? (
              data?.myHouse.map((item, index) => (
                <CustomcardMyhouses key={index} data={item} />
              ))
            ) : (
              filteredData.map((item, index) => (
                <CustomcardMyhouses key={index} data={item} />
              ))
            )}
          </div>
        )}
      </div>
      {showBookhouse && (
        <NewHouse
          onClose={handleCancelBookhouse}
          // state={state}
          // userdata={userdata}
        />
      )}
    </div>
  );
};

export default myHouse;
