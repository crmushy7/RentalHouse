import React, { FC } from 'react'
import Rental from "../../assets/images/Rental.jpeg";
import Custominput from './components/Custominput';
import CustomLink from './components/CustomLink';
import CustomButton from './components/CustomButton';

const Forgotpassword:FC = () => {
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
            ENTER THE EMAIL YOU USED TO REGISTER WITH US!
          </span>

          <Custominput
            labeled="Email"
            inputType="email"
            placeholder="Enter your email"
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            <CustomButton
              title="RESET PASSWORD"
              navigateTo=" "
              background="#696969"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgotpassword