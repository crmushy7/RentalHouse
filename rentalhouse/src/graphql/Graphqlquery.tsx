import { gql } from "graphql-request";
import React, { FC } from "react";
import { useQuery } from "react-query";
import { users } from './globalType/Globaltype';
import { GraphQLResponse } from "../../node_modules/graphql-request/src/types";
import graphqlRequestClient from "../clients/GraphqlRequestClients";

const GET_ALL_USERS_QUERY = gql`
  query GetAllUsers {
    user {
      username
      firstName
      middleName
      lastName
      phoneNumber
      accountType
    }
  }
`;

const GqlRequestQuery: FC<users> = () => {
  const { isLoading, error, data } = useQuery<GraphQLResponse, Error, users[]>(
    'users',
    async ()=>{
        return graphqlRequestClient.request(GET_ALL_USERS_QUERY);
    },
    {
        select: (response)=>response.users,
    }
  );
  if(isLoading)return<p>Loading...</p>;
  if(error)return<p>{error.message}</p>
  return (
    <> {data?.map((users,index)=>{
         return (
           <div key={index}>
             <h1>{users?.lastname}</h1>
           </div>
         );
    }
       )}</>
   
  )
};

export default GqlRequestQuery;
