import React from "react";
import Rental from "../../assets/images/Rental.jpeg";
import useRegister from "./components/UseRegisterhook";
import Custominput from "./components/Custominput";
import CustomButton from "./components/CustomButton";
import UseLoginHook from "./components/UseLoginHook";
import CustomLink from "./components/CustomLink";

const Login = () => {
 const [data]=UseLoginHook();
  return (
    <>
      <div
        className="flex flex-col h-screen border border-black justify-center items-center"
        style={{}}
      >
        <div className="flex flex-row justify-center items-center h-auto w-auto   bg-white rounded-full ">
          <img
            className="flex rounded-full shadow-xl "
            src={Rental}
            alt="pc"
            style={{
              padding: "0%",
            }}
          />
        </div>
        <div
          className="flex flex-col items-start h-auto w-3/6  bg-white rounded-lg shadow-2xl"
          style={{ marginTop: "2%", marginBottom: "2" }}
        >
          <span className="flex underline  text-blue-600 justify-center items-center w-full font-bold">
            FILL YOUR DETAILS BELOW TO JOIN THE NETWORK!!
          </span>
          {data?.map((item) => {
            return (
              <Custominput
                labeled={item.labeled}
                inputType={item.inputType}
                placeholder={item.placeholder}
              />
            );
          })}
          <div className=" justify-between flex" style={{width:"94%"}}>
            <CustomLink
              title={"Forgot password?"}
              linkto={"/ForgotPassword"}
            />
            <CustomLink
              title={"Dont have an account? Register..."}
              linkto={"/"}
            />
          </div>
          <CustomButton title="Login" navigateTo="/Tabcreator" background="green" />
        </div>
      </div>
    </>
  );
        }
export default Login;
