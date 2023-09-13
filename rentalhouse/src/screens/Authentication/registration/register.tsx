import { BackgroundImage } from "@mantine/core";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../../lib/color/colors";
import { AccountType, Gender } from "../../../lib/enums/enum";
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
import { notifications } from "@mantine/notifications";
import Passwordfield from "../component/Password";
import { Password } from "primereact/password";
import TemplateDemo from "../component/Password";
import PasswordInput from "../component/Password";
import { InputText } from "primereact/inputtext";

const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleNAme] = useState("");
  const [lastname, setLastName] = useState("");
  const [selectedGender, setSelectedGender] = useState("Select Gender");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState<string>("");
  const [accountType, setAccountType] = useState("Account type");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [graphQLError, setGraphQLError] = useState<string | null>(null);
  const genderOptions = ["Male", "Female", "Non-binary", "Other"];
  const Acctypeoptions = ["Tenant", "Owner"];
  const { mutate } = useCreateUserInputMutation(graphqlRequestClient, {
    onSuccess: () => {
      queryClient.invalidateQueries(["createUserInput"]);
      return success();
    },
    onError: () => {
      const errorMessage = 'Unauthorized Access!!'
      errorDisplay(errorMessage);
    },
  });
  const errorDisplay = (errorMessage :string) => {
    notifications.show({
      title: "Oops!!",
      message: `${errorMessage}`,
      styles: (theme: { colors: { red: any[] }; white: any }) => ({
        root: {
          backgroundColor: theme.colors.red[6],
          borderColor: theme.colors.red[6],

          "&::before": { backgroundColor: theme.white },
        },

        title: { color: theme.white },
        description: { color: theme.white },
        closeButton: {
          color: theme.white,
          "&:hover": { backgroundColor: theme.colors.red[7] },
        },
      }),
      autoClose: 5000,
    });
  };
  const success = () => {
    navigate("/auth");
  };

  const handleRegister = async () => {
    if (
      firstName.length === 0 ||
      middleName.length === 0 ||
      lastname.length === 0 ||
      phoneNumber.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      errorDisplay("All fields required!");
    } else if (selectedGender === "Select Gender") {
      errorDisplay("Choose Gender!");
    } else if (accountType === "Account type") {
      errorDisplay("Account Type required!");
    } else if (password !== confirmPassword) {
      errorDisplay("Password does not match!");
    }else if(phoneNumber.length !== 9){
      errorDisplay("Incorrect phone number length!! Country code automatically added");
    } else {
      const newNumber="+255"+phoneNumber
      const number = newNumber.trim().replace(/\s+/g, " ");
      console.log('new number',number)
      await mutate({

        input: {
          username: email,
          firstName: firstName,
          middleName: middleName,
          lastname: lastname,
          gender: selectedGender,
          phoneNumber: number,
          accountType: accountType,
          password: password,
        },
      });
    }
  };

  const handleLogin = () => {
    navigate("/auth");
  };
  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };
  const handleAcctype = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAccountType(event.target.value);
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
          className="overflow-auto w-full h-full gap-5 rounded-b-lg flex flex-col justify-center items-center sm:w-1/2 sm:h-full sm:Right-to-left sm:flex sm:justify-center sm:items-center 2xl:h-full"
        >
          <div className="flex h-1/6 pt-2 ">
           
          </div>

          <div className="w-5/6 pb-3 flex flex-col gap-3 sm:w-5/6 md:5/6 lg:w-5/6 xl:w-5/6 2xl:w-5/6 h-full">
            <CustomInputField
              type={"text"}
              backgroundColor={colors.white}
              border={"none"}
              borderRadius={6}
              fontSize={"14px"}
              padding={10}
              width={"100%"}
              placeholder={"First Name"}
              onChange={setFirstName}
            />
            <CustomInputField
              type={"text"}
              backgroundColor={colors.white}
              border={"none"}
              borderRadius={6}
              fontSize={"14px"}
              padding={10}
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
              padding={10}
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
              padding={10}
              width={"100%"}
              placeholder={"Email"}
              onChange={setEmail}
            />
            <div className="p-inputgroup flex w-full rounded-md items-center bg-slate-200">
              <span className="p-inputgroup-addon pr-1">+255</span>
              <InputText
                placeholder="phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex w-full h-full rounded-r-md p-2"
                type="number"
              />
            </div>
            {/* <CustomInputField
              type={"text"}
              backgroundColor={colors.white}
              border={"none"}
              borderRadius={6}
              fontSize={"14px"}
              padding={10}
              width={"100%"}
              placeholder={"Phone number"}
              onChange={setPhoneNumber}
            /> */}

            <span className="flex w-full bg-white rounded-lg">
              <PasswordInput
                type={"password"}
                backgroundColor={""}
                border={""}
                borderRadius={0}
                fontSize={""}
                padding={0}
                width={""}
                placeholder={"input strong password"}
                onChange={setPassword}
              />
            </span>

            <span className="flex w-full bg-white rounded-lg">
              <PasswordInput
                type={"password"}
                backgroundColor={""}
                border={""}
                borderRadius={0}
                fontSize={""}
                padding={0}
                width={""}
                placeholder={"confirm password"}
                onChange={setConfirmPassword}
              />
            </span>
            <div className="flex border border-black">
              <Select
                borderColor="tomato"
                color="whitesmoke"
                className="text-red-500 bg-black"
                placeholder="Select Gender"
                value={selectedGender}
                onChange={handleGenderChange}
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
                value={accountType}
                onChange={handleAcctype}
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
