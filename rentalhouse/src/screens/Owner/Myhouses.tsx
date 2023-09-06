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

const myHouse: FC = () => {
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

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <h1>My Houses</h1>
      <div className="h-5/6 w-auto  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-3">
        {data?.myHouse.map((myhouse, index) => (
          <div key={index}>
            {/* <img src={`${myhouse.imgUrl[1]}`} alt={myhouse.name} /> */}

            <CustomcardMyhouses data={myhouse} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default myHouse;
