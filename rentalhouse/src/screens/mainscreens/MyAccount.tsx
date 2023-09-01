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
    <div className="flex flex-col justify-center bg-stone-200 h-screen w-full items-center">
      <div
        style={{
          display: "flex",
          height: "90%",
          width: "85%",
        }}
        className="flex-col "
      >
        <span className="font-bold">Personal Settings</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "35%",
            backgroundColor: "whitesmoke",
          }}
          className="justify-evenly rounded-lg"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "70%",
              backgroundColor: "whitesmoke",
            }}
            className="flex sm:flex-col"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "50%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "60%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  className="flex rounded-md"
                  src={Avatar}
                  alt="profile picture"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "15%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  style={{ border: "1px solid black" }}
                  className="rounded-full"
                >
                  Change
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "50%",
                justifyContent: "space-around",
              }}
            >
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
            <a href="#" className="text-blue-500">
              Change name |
            </a>
            <a href="#" className="text-blue-500">
              Change email |
            </a>
            <a href="#" className="text-blue-500">
              Change password |
            </a>
            <a href="#" className="text-blue-500">
              Change no |
            </a>
          </div>
        </div>
        <span className="mt-10 font-bold">Account Settings</span>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "5%",
            width: "100%",
            backgroundColor: "whitesmoke",
          }}
          className="rounded-lg"
        >
          <DropdownMenu country={countryname.country} />
        </div>
        <span className="mt-10 font-bold">Terminate Account</span>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "10%",
            backgroundColor: "whitesmoke",
          }}
          className="rounded-lg"
        >
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
