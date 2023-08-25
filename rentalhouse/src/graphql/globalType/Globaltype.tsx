export type CreateUserInput = {
  accountType: string,
  firstName: string,
  gender: string,
  lastname: string,
  middleName: string,
  password: string,
  phoneNumber: string,
  username: string,
};

export type LoginResponse = {
  accessToken: string,
  user: UserType;
};

export type LoginUserInput = {
  password: string,
  username: string,
};

export type Mutation = {
  createUser(createUserInput: CreateUserInput): UserType;
  login(loginUserInput: LoginUserInput): LoginResponse;
  removeUser(id: number): UserType
};

export type Query = {
  user(username: string): UserType,
  users: [UserType];
};
export type users = {
  accountType: string;
  firstName: string;
  gender: string;
  lastname: string;
  middleName: string;
  phoneNumber: string;
  username: string;
};

export type UpdateUserInput = {
  accountType: String;
  firstName: String;
  gender: String;
  id: number;
  lastname: String;
  middleName: String;
  password: String;
  phoneNumber: String;
  username: String;
};

export type UserType = {
  accountType: string,
  firstName: string,
  gender: string,
  lastname: string,
  middleName: string,
  phoneNumber: string,
  username: string,
};
