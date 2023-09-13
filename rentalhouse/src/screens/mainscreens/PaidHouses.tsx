// import { FC, useEffect, useState } from "react";
// import { getUserAccessToken } from "../../utils/localStorageUtils";
// import { GetUsersQuery, useGetUsersQuery } from "../../generated/graphql";
// import graphqlRequestClient from "../../lib/clients/GraphqlRequestClients";

// const Users: FC = () => {
//   const [accessToken, setAccessToken] = useState<string | null>(
//     getUserAccessToken()
//   );
//   const [shouldFetchData, setShouldFetchData] = useState(false);

//   useEffect(() => {
//     console.log(accessToken);
//     if (accessToken) {
//       setShouldFetchData(true);
//     }
//   }, [accessToken]);

//   const { isLoading, error, data, refetch } = useGetUsersQuery<
//     GetUsersQuery,
//     Error
//   >(
//     graphqlRequestClient.setHeaders({ Authorization: `Bearer ${accessToken}` }),
//     {},
//     { enabled: shouldFetchData }
//   );

//   useEffect(() => {
//     if (accessToken && shouldFetchData) {
//       refetch();
//     }
//   }, [accessToken, shouldFetchData, refetch]);

//   if (!accessToken) {
//     return <p>Please log in to view users.</p>;
//   }

//   if (isLoading) return <p>Loading...</p>;
//   if (error) {
//     const errorMessage =
//       error.response &&
//       error.response.errors &&
//       error.response.errors.length > 0
//         ? error.response.errors[0].message.message
//         : "An error occurred";
//     return <p>{errorMessage}</p>;
//   }

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {data.users.map((user, index) => (
//           <li key={index}>
//             <p>
//               Name: {user.firstName} {user.middleName} {user.lastname}
//             </p>
//             <p>Account Type: {user.accountType}</p>
//             <p>Phone Number: {user.phoneNumber}</p>
//             <p>Username: {user.username}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Users;

import { useEffect, useState } from "react";
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

const PaidHouses = () => {
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
      setAccessToken(accessToken);
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
    const errorMessage = "An error occurred";
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
      <div className="flex justify-end w-full">
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
      

     
    </div>
  );
};

export default PaidHouses;
