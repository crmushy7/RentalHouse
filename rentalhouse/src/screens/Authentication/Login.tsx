// import React from "react";
// import Rental from "../../assets/images/Rental.jpeg";
// import useRegister from "./components/UseRegisterhook";
// import Custominput from "./components/Custominput";
// import CustomButton from "./components/CustomButton";
// import UseLoginHook from "./components/UseLoginHook";
// import CustomLink from "./components/CustomLink";

// const Login = () => {
//  const [data]=UseLoginHook();
//   return (
//     <>
//       <div
//         className="flex flex-col h-full  justify-center items-center"
//         style={{}}
//       >
//         <div className="flex flex-row justify-center items-center h-auto w-auto   bg-white rounded-full ">
//           <img
//             className="flex rounded-full shadow-xl "
//             src={Rental}
//             alt="pc"
//             style={{
//               padding: "0%",
//             }}
//           />
//         </div>
//         <div
//           className="flex flex-col items-start justify-around h-80 w-auto  bg-white rounded-lg shadow-2xl"
//           style={{ marginTop: "2%", marginBottom: "2" }}
//         >
//           <span className="flex underline  text-blue-600 justify-center items-center w-full font-bold">
//             FILL YOUR DETAILS BELOW TO JOIN THE NETWORK!!
//           </span>
//           {data?.map((item) => {
//             return (
//               <Custominput
//                 labeled={item.labeled}
//                 inputType={item.inputType}
//                 placeholder={item.placeholder}
//               />
//             );
//           })}
//           <div className=" justify-between flex" style={{width:"94%"}}>
//             <CustomLink
//               title={"Forgot password?"}
//               linkto={"/ForgotPassword"}
//             />
//             <CustomLink
//               title={"Dont have an account? Register..."}
//               linkto={"/"}
//             />
//           </div>
//           <CustomButton title="Login" navigateTo="/Homepage" background="" />
//         </div>
//       </div>
//     </>
//   );
//         }
// export default Login;
import { FC, useState } from "react";
import { BackgroundImage } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { GraphQLError } from "graphql";
import {
  useLoginUserInputMutation,
  LoginUserInputMutation,
} from "../../generated/graphql";
import graphqlRequestClient from "../../lib/clients/GraphqlRequestClients";
import { saveUserData } from "../../utils/localStorageUtils";
import colors from "../../lib/color/colors";
import CustomInputField from "./component/custom-input-field";
import CustomButton from "./component/custom-buttom";

const Login: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [graphQLError, setGraphQLError] = useState<string | null>(null);

  const queryClient = useQueryClient();

  const { mutate } = useLoginUserInputMutation(graphqlRequestClient, {
    onSuccess: (data: LoginUserInputMutation) => {
      queryClient.invalidateQueries(["LoginUserInput"]);
      saveUserData(data);
      console.log(data);
      navigate("/home");
      return;
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

  const handleLogin = () => {
    mutate({
      input: {
        username: email,
        password: password,
      },
    });
  };

  const handleForgetPassword = () => {
    alert("forgot password");
  };

  return (
    <div className="bg-slate-200 w-full h-screen items-center justify-center flex">
      <div className="flex flex-col w-full h-1/2 bg-white mx-10 rounded-lg sm:flex-row sm:flex sm:w-full sm:h-2/4 md:w-4/6 lg:w-4/6 xl:w-6/12 2xl:w-5/12">
        <div className="bg-white rounded-t-lg  w-full h-1/2 flex flex-col justify-center items-center gap-2 sm:w-1/2 sm:h-full sm:flex sm:flex-col sm:gap-2 sm:justify-center sm:items-center sm:rounded-lg  2xl:h-full">
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
          className="w-full h-1/2 gap-5 rounded-b-lg flex flex-col justify-center items-center sm:w-1/2 sm:h-full sm:Right-to-left sm:flex sm:justify-center sm:items-center 2xl:h-full"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/950/950586.png"
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
              placeholder={"Email"}
              onChange={setEmail}
            />
            <CustomInputField
              type={"password"}
              backgroundColor={colors.white}
              border={"none"}
              borderRadius={6}
              fontSize={"14px"}
              padding={6}
              width={"100%"}
              placeholder={"password"}
              onChange={setPassword}
            />
            <div className="flex place-content-between w-full">
              <CustomButton
                backgroundColor={colors.transparent}
                borderRadius={30}
                name={"Login"}
                color={colors.white}
                fontSize={14}
                border={`1px solid ${colors.white}`}
                paddingLeft={20}
                paddingRight={20}
                paddingTop={3}
                paddingBottom={3}
                onClick={handleLogin}
              />
              <CustomButton
                backgroundColor={colors.transparent}
                borderRadius={0}
                name={"Forget password"}
                color={colors.white}
                fontSize={14}
                border={"none"}
                paddingLeft={0}
                paddingRight={0}
                paddingTop={0}
                paddingBottom={0}
                onClick={handleForgetPassword}
              />
            </div>
          </div>
        </BackgroundImage>
      </div>
    </div>
  );
};

export default Login;
