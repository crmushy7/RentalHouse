import { BackgroundImage } from "@mantine/core";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../../lib/color/colors";
import { AccountType,Gender } from "../../../lib/enums/enum";
import CustomInputField from "../component/custom-input-field";
import RadioButton from "./components/radio-button";
import CustomButton from "../component/custom-buttom";
import {
  useCreateUserInputMutation,
  CreateUserInputMutation,
} from "../../../generated/graphql";
import graphqlRequestClient from "../../../lib/clients/GraphqlRequestClients";
import { useQueryClient } from "@tanstack/react-query";
import { GraphQLError } from "graphql";
import { Select } from "@chakra-ui/react";

const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleNAme] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [graphQLError, setGraphQLError] = useState<string | null>(null);
  const genderOptions = ["Male", "Female", "Non-binary", "Other"]; 
  const Acctypeoptions=["Tenant","Owner"]
  const { mutate } = useCreateUserInputMutation(graphqlRequestClient, {
    onSuccess: (data: CreateUserInputMutation) => {
      queryClient.invalidateQueries(["createUserInput"]);
      return console.log("mutation data", data);
    },
    onError: (error: GraphQLError) => {
      const errorMessage = Array.isArray(
        error.response.errors[0].message.message
      )
        ? error.response.errors[0].message.message.join(", ")
        : error.response.errors[0].message.message;

      setGraphQLError(errorMessage);
    },
  });

  const handleRegister = async () => {
    if (
      firstName.length === 0 &&
      middleName.length === 0 &&
      lastname.length === 0 &&
      gender.length === 0 &&
      phoneNumber.length === 0 &&
      email.length === 0 &&
      password.length === 0
    ) {
      alert("All fields are required");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      await mutate({
        input: {
          username: email,
          firstName: firstName,
          middleName: middleName,
          lastname: lastname,
          gender: gender,
          phoneNumber: phoneNumber,
          accountType: accountType,
          password: password,
        },
      });
    }
  };

  const handleLogin = () => {
    navigate("/auth");
  };

  return (
    <div className="bg-slate-200 w-full h-screen items-center justify-center flex">
      <div className="flex flex-col w-full h-5/6 bg-white mx-10 rounded-lg sm:flex-row sm:flex sm:w-full sm:h-4/6 sm:bg-white md:w-4/6 lg:w-4/6 xl:w-6/12 2xl:w-5/12">
        <div className="rounded-t-lg  w-full h-1/4 flex flex-col justify-center items-center gap-2 sm:w-1/2 sm:h-full sm:flex sm:flex-col sm:gap-2 sm:justify-center sm:items-center sm:rounded-lg  2xl:h-full">
          <p className="text-stone-700 font-semibold text-2xl">Welcome</p>
          <div
            className="rounded-full flex text-center"
            style={{ borderRadius: "100%", width: "100px", height: "100px" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1441/1441333.png"
              alt="logo"
            />
          </div>
          <div>
            <p className="text-stone-900 flex text-center font-normal text-xs">
              Get accessed by over 1 Lakh buyers
            </p>
          </div>
        </div>
        <BackgroundImage
          src={`${"https://us.123rf.com/450wm/altitudevisual/altitudevisual2303/altitudevisual230302636/200859262-house-with-exterior-lighting-and-security-system-providing-safety-and-comfort-created-with.jpg?ver=6"}`}
          radius="md"
          className="w-full h-3/4 gap-5 rounded-b-lg flex flex-col justify-center items-center sm:w-1/2 sm:h-full sm:Right-to-left sm:flex sm:justify-center sm:items-center 2xl:h-full"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/3005/3005358.png"
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="w-5/6 flex flex-col gap-3 sm:w-5/6 md:5/6 lg:w-5/6 xl:w-5/6 2xl:w-5/6">
            <CustomInputField
              type={"text"}
              backgroundColor={colors.white}
              border={"none"}
              borderRadius={6}
              fontSize={"14px"}
              padding={6}
              width={"100%"}
              placeholder={"First nName"}
              onChange={setFirstName}
            />
            <CustomInputField
              type={"text"}
              backgroundColor={colors.white}
              border={"none"}
              borderRadius={6}
              fontSize={"14px"}
              padding={6}
              width={"100%"}
              placeholder={"Middle Name"}
              onChange={setMiddleNAme}
            />
            <CustomInputField
              type={"text"}
              backgroundColor={colors.white}
              border={"none"}
              borderRadius={6}
              fontSize={"14px"}
              padding={6}
              width={"100%"}
              placeholder={"last Name"}
              onChange={setLastName}
            />
            <CustomInputField
              type={"email"}
              backgroundColor={colors.white}
              border={"none"}
              borderRadius={6}
              fontSize={"14px"}
              padding={6}
              width={"100%"}
              placeholder={"Email"}
              onChange={setEmail}
            />
            <CustomInputField
              type={"text"}
              backgroundColor={colors.white}
              border={"none"}
              borderRadius={6}
              fontSize={"14px"}
              padding={6}
              width={"100%"}
              placeholder={"Phone number"}
              onChange={setPhoneNumber}
            />

            <CustomInputField
              type={"password"}
              backgroundColor={colors.white}
              border={"none"}
              borderRadius={6}
              fontSize={"14px"}
              padding={6}
              width={"100%"}
              placeholder={"Password"}
              onChange={setPassword}
            />
            <CustomInputField
              type={"password"}
              backgroundColor={colors.white}
              border={"none"}
              borderRadius={6}
              fontSize={"14px"}
              padding={6}
              width={"100%"}
              placeholder={"Confirm password"}
              onChange={setConfirmPassword}
            />
            <div className="flex border border-black">
              <Select
                borderColor="tomato"
                color="whitesmoke"
                className="text-red-500 bg-black "
                placeholder="Select Gender"
              >
                {genderOptions.map((gender, index) => (
                  <option key={index} value={gender}>
                    {gender}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex border border-black">
              <Select
                borderColor="tomato"
                color="whitesmoke"
                className="text-red-500 bg-black "
                placeholder=" Account type"
              >
                {Acctypeoptions.map((Acctype, index) => (
                  <option key={index} value={Acctype}>
                    {Acctype}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex place-content-between w-full">
              <CustomButton
                backgroundColor={colors.transparent}
                borderRadius={30}
                name={"Register"}
                color={colors.white}
                fontSize={14}
                border={`1px solid ${colors.white}`}
                paddingLeft={20}
                paddingRight={20}
                paddingTop={3}
                paddingBottom={3}
                onClick={handleRegister}
              />
              <CustomButton
                backgroundColor={colors.transparent}
                borderRadius={0}
                name={"have account? login"}
                color={colors.white}
                fontSize={14}
                border={"none"}
                paddingLeft={0}
                paddingRight={0}
                paddingTop={0}
                paddingBottom={0}
                onClick={handleLogin}
              />
            </div>
          </div>
        </BackgroundImage>
      </div>
    </div>
  );
};

export default RegisterPage;
