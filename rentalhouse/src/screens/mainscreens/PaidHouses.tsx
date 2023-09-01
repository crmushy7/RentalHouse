import { FC, useEffect, useState } from "react";
import { getUserAccessToken } from "../../utils/localStorageUtils";
import { GetUsersQuery, useGetUsersQuery } from "../../generated/graphql";
import graphqlRequestClient from "../../lib/clients/GraphqlRequestClients";

const Users: FC = () => {
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

  const { isLoading, error, data, refetch } = useGetUsersQuery<
    GetUsersQuery,
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
    return <p>Please log in to view users.</p>;
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

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.users.map((user, index) => (
          <li key={index}>
            <p>
              Name: {user.firstName} {user.middleName} {user.lastname}
            </p>
            <p>Account Type: {user.accountType}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Username: {user.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
