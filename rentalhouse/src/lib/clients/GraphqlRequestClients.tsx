import { GraphQLClient } from "graphql-request";
import { getUserAccessToken } from "../../utils/localStorageUtils";

const requestHeaders = {
  authorization: `Bearer ${getUserAccessToken()}`,
};

const graphqlRequestClient = new GraphQLClient(
  "http://192.168.150.151:3333/graphql" as string,
  {
    headers: requestHeaders,
  }
);

export default graphqlRequestClient;
