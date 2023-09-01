import React, { FC } from 'react'
import Custominput from './components/Custominput';
import Account_gender from './components/Account_gender';
import CustomLink from './components/CustomLink';
import useRegister from './components/UseRegisterhook';
import CustomButton from './components/CustomButton';
import Rental from "../../assets/images/Rental.jpeg";

const Register: FC = () => {
    const [data]=useRegister();
  return (
    <>
      <div
        className="flex flex-col h-auto  justify-evenly items-center"
        style={{}}
      >
        <div className="flex flex-row justify-center items-center h-40  w-auto   bg-white rounded-full ">
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
          className="flex flex-col items-start    bg-white rounded-lg shadow-2xl"
          style={{
            marginTop: "2%",
            marginBottom: "2",
            width: "500px",
            height: "850px",
          }}
        >
          <span className="flex underline justify-center items-center text-green-300 w-full font-bold">
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

          <Account_gender />
          <div className="flex w-11/12 justify-end ">
            <CustomLink title={"Back to login"} linkto={"/Login"} />
          </div>

          <CustomButton title="Register" navigateTo="/" background="#59788E" />
        </div>
      </div>
    </>
  );
}

export default Register