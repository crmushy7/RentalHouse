import spanHook from "./components/subcomponents/UseSpanhook";
import CustomSpandiv from "./components/subcomponents/CustomSpandiv";
import DropdownMenu from "./components/subcomponents/DropdownMenu";
import AllCountries from "./components/subcomponents/AllCountries";
import Avatar from "../../assets/images/Avatared.jpeg";
import { useEffect, useState } from "react";
import { LoginUserInputMutation } from "../../generated/graphql";
import { getUserData } from "../../utils/localStorageUtils";

const MyAccount = () => {
  const [data] = spanHook();
  const [countryname] = AllCountries();
  const [user, setUser] = useState<LoginUserInputMutation | null>(
    getUserData() ?? null
  );

  useEffect(() => {
    const userData = getUserData();
    if (userData !== null) {
      setUser(userData);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center bg-stone-200 h-screen overflow-auto w-full items-center">
      <div className="flex-col flex justify-around h-5/6 w-5/6 ">
        <span className="font-bold">Personal Settings</span>
        <div className="flex flex-col rounded-lg  w-full h-3/4  md:h-1/2 p-5 sm:flex-row sm:flex sm:w-full border-4 sm:h-3/4 sm:p-5 md:flex-col lg:flex-col 2xl:flex-col">
          <div className="flex flex-col rounded-lg  w-full h-full   p-5 sm:flex-col sm:flex sm:w-full sm:h-full sm:p-5 md:flex-row lg:flex-row">
            <div className="flex flex-col rounded-lg justify-between items-center w-full h-full  p-5 sm:flex-row sm:flex sm:w-full sm:h-full sm:p-5 md:flex-col lg:w-1/2 lg:flex-col">
              <div className="flex h-2/3">
                <img
                  className="flex rounded-md"
                  src={Avatar}
                  alt="profile picture"
                />
              </div>
              <div className="flex h-1/5">
                <button
                  style={{ border: "1px solid black" }}
                  className="rounded-full"
                >
                  Change
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-evenly h-full w-full">
              {data?.map((item, index) => {
                return (
                  <CustomSpandiv
                    labeled={item.labeled}
                    inputType={item.inputType}
                    placeholder={item.placeholder}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-evenly ">
            <a href="#" className="text-blue-500 border flex justify-center">
              Change name
            </a>
            <a href="#" className="text-blue-500">
              Change email
            </a>
            <a href="#" className="text-blue-500">
              Change password
            </a>
            <a href="#" className="text-blue-500">
              Change no
            </a>
          </div>
        </div>
        <span className="mt-10 font-bold">Account Settings</span>

        <div className="flex h-1/6 rounded-lg" >
          <DropdownMenu country={countryname.country} />
        </div>
        <span className="mt-10 font-bold">Terminate Account</span>

        <div className="flex h-1/6   rounded-lg">
          <span>
            Terminating your account will lead to permanent deletion of your
            data!
          </span>
          <span>
            <a href="#" className="text-red-600">
              Terminate Account
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
