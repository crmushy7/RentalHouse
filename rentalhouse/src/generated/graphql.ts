import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateHouseInput = {
  Description: Scalars['String']['input'];
  District: Scalars['String']['input'];
  Region: Scalars['String']['input'];
  Ward: Scalars['String']['input'];
  imgUrl: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  status: Scalars['String']['input'];
};

export type CreateUserInput = {
  accountType: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  middleName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type HouseType = {
  __typename?: 'HouseType';
  Description: Scalars['String']['output'];
  District: Scalars['String']['output'];
  Region: Scalars['String']['output'];
  Ward: Scalars['String']['output'];
  _id: Scalars['ID']['output'];
  imgUrl: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  user: UserType;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
  user: UserType;
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createHouse: HouseType;
  createUser: UserType;
  login: LoginResponse;
  removeHouse: HouseType;
  removeUser: UserType;
  updateHouse: Scalars['String']['output'];
  updateUser: UserType;
};


export type MutationCreateHouseArgs = {
  createHouseInput: CreateHouseInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveHouseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateHouseArgs = {
  updateHouseInput: UpdateHouseInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  house: HouseType;
  houses: Array<HouseType>;
  myHouse: Array<HouseType>;
  user: UserType;
  users: Array<UserType>;
};


export type QueryHouseArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

export type UpdateHouseInput = {
  Description: Scalars['String']['input'];
  _id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  status: Scalars['String']['input'];
};

export type UpdateUserInput = {
  accountType?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  lastname?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserType = {
  __typename?: 'UserType';
  accountType: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  middleName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type CreateUserInputMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserInputMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserType', firstName: string, middleName: string, lastname: string, gender: string, phoneNumber: string, username: string, accountType: string } };

export type LoginUserInputMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginUserInputMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, user: { __typename?: 'UserType', accountType: string, firstName: string, gender: string, lastname: string, middleName: string, phoneNumber: string, username: string } } };

export type CreateHouseInputMutationVariables = Exact<{
  input: CreateHouseInput;
}>;


export type CreateHouseInputMutation = { __typename?: 'Mutation', createHouse: { __typename?: 'HouseType', Description: string, District: string, Region: string, Ward: string, imgUrl: Array<string>, status: string, price: number, name: string } };

export type GetAllHousesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHousesQuery = { __typename?: 'Query', houses: Array<{ __typename?: 'HouseType', Description: string, District: string, Region: string, Ward: string, imgUrl: Array<string>, name: string, price: number, status: string, user: { __typename?: 'UserType', firstName: string, middleName: string, lastname: string, gender: string, phoneNumber: string, username: string, accountType: string } }> };

export type GetMyHousesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyHousesQuery = { __typename?: 'Query', myHouse: Array<{ __typename?: 'HouseType', Description: string, District: string, Region: string, Ward: string, imgUrl: Array<string>, name: string, price: number, status: string, _id: string, user: { __typename?: 'UserType', firstName: string, middleName: string, lastname: string, gender: string, phoneNumber: string, username: string, accountType: string } }> };

export type UpdateHouseInputMutationVariables = Exact<{
  input: UpdateHouseInput;
}>;


export type UpdateHouseInputMutation = { __typename?: 'Mutation', updateHouse: string };

export type GetUserbyUsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type GetUserbyUsernameQuery = { __typename?: 'Query', user: { __typename?: 'UserType', firstName: string, middleName: string, lastname: string, gender: string, phoneNumber: string, username: string, accountType: string } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'UserType', firstName: string, middleName: string, lastname: string, gender: string, phoneNumber: string, username: string, accountType: string }> };


export const CreateUserInputDocument = `
    mutation CreateUserInput($input: CreateUserInput!) {
  createUser(createUserInput: $input) {
    firstName
    middleName
    lastname
    gender
    phoneNumber
    username
    accountType
  }
}
    `;
export const useCreateUserInputMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateUserInputMutation, TError, CreateUserInputMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateUserInputMutation, TError, CreateUserInputMutationVariables, TContext>(
      ['CreateUserInput'],
      (variables?: CreateUserInputMutationVariables) => fetcher<CreateUserInputMutation, CreateUserInputMutationVariables>(client, CreateUserInputDocument, variables, headers)(),
      options
    );
export const LoginUserInputDocument = `
    mutation LoginUserInput($input: LoginUserInput!) {
  login(loginUserInput: $input) {
    accessToken
    user {
      accountType
      firstName
      gender
      lastname
      middleName
      phoneNumber
      username
    }
  }
}
    `;
export const useLoginUserInputMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginUserInputMutation, TError, LoginUserInputMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginUserInputMutation, TError, LoginUserInputMutationVariables, TContext>(
      ['LoginUserInput'],
      (variables?: LoginUserInputMutationVariables) => fetcher<LoginUserInputMutation, LoginUserInputMutationVariables>(client, LoginUserInputDocument, variables, headers)(),
      options
    );
export const CreateHouseInputDocument = `
    mutation CreateHouseInput($input: CreateHouseInput!) {
  createHouse(createHouseInput: $input) {
    Description
    District
    Region
    Ward
    imgUrl
    status
    price
    name
  }
}
    `;
export const useCreateHouseInputMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateHouseInputMutation, TError, CreateHouseInputMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateHouseInputMutation, TError, CreateHouseInputMutationVariables, TContext>(
      ['CreateHouseInput'],
      (variables?: CreateHouseInputMutationVariables) => fetcher<CreateHouseInputMutation, CreateHouseInputMutationVariables>(client, CreateHouseInputDocument, variables, headers)(),
      options
    );
export const GetAllHousesDocument = `
    query getAllHouses {
  houses {
    Description
    District
    Region
    Ward
    imgUrl
    name
    price
    status
    user {
      firstName
      middleName
      lastname
      gender
      phoneNumber
      username
      accountType
    }
  }
}
    `;
export const useGetAllHousesQuery = <
      TData = GetAllHousesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllHousesQueryVariables,
      options?: UseQueryOptions<GetAllHousesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllHousesQuery, TError, TData>(
      variables === undefined ? ['getAllHouses'] : ['getAllHouses', variables],
      fetcher<GetAllHousesQuery, GetAllHousesQueryVariables>(client, GetAllHousesDocument, variables, headers),
      options
    );
export const GetMyHousesDocument = `
    query getMyHouses {
  myHouse {
    Description
    District
    Region
    Ward
    imgUrl
    name
    price
    status
    _id
    user {
      firstName
      middleName
      lastname
      gender
      phoneNumber
      username
      accountType
    }
  }
}
    `;
export const useGetMyHousesQuery = <
      TData = GetMyHousesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMyHousesQueryVariables,
      options?: UseQueryOptions<GetMyHousesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMyHousesQuery, TError, TData>(
      variables === undefined ? ['getMyHouses'] : ['getMyHouses', variables],
      fetcher<GetMyHousesQuery, GetMyHousesQueryVariables>(client, GetMyHousesDocument, variables, headers),
      options
    );
export const UpdateHouseInputDocument = `
    mutation UpdateHouseInput($input: UpdateHouseInput!) {
  updateHouse(updateHouseInput: $input)
}
    `;
export const useUpdateHouseInputMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateHouseInputMutation, TError, UpdateHouseInputMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateHouseInputMutation, TError, UpdateHouseInputMutationVariables, TContext>(
      ['UpdateHouseInput'],
      (variables?: UpdateHouseInputMutationVariables) => fetcher<UpdateHouseInputMutation, UpdateHouseInputMutationVariables>(client, UpdateHouseInputDocument, variables, headers)(),
      options
    );
export const GetUserbyUsernameDocument = `
    query getUserbyUsername($username: String!) {
  user(username: $username) {
    firstName
    middleName
    lastname
    gender
    phoneNumber
    username
    accountType
  }
}
    `;
export const useGetUserbyUsernameQuery = <
      TData = GetUserbyUsernameQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetUserbyUsernameQueryVariables,
      options?: UseQueryOptions<GetUserbyUsernameQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserbyUsernameQuery, TError, TData>(
      ['getUserbyUsername', variables],
      fetcher<GetUserbyUsernameQuery, GetUserbyUsernameQueryVariables>(client, GetUserbyUsernameDocument, variables, headers),
      options
    );
export const GetUsersDocument = `
    query getUsers {
  users {
    firstName
    middleName
    lastname
    gender
    phoneNumber
    username
    accountType
  }
}
    `;
export const useGetUsersQuery = <
      TData = GetUsersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetUsersQueryVariables,
      options?: UseQueryOptions<GetUsersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUsersQuery, TError, TData>(
      variables === undefined ? ['getUsers'] : ['getUsers', variables],
      fetcher<GetUsersQuery, GetUsersQueryVariables>(client, GetUsersDocument, variables, headers),
      options
    );