import React from 'react'
import spanHook from './components/subcomponents/UseSpanhook';
import CustomSpandiv from './components/subcomponents/CustomSpandiv';
import DropdownMenu from './components/subcomponents/DropdownMenu';
import AllCountries from './components/subcomponents/AllCountries';

const MyAccount = () => {
   const [data] = spanHook();
   const [countryname]=AllCountries();
  return (
    <div className="flex flex-col justify-center bg-stone-200 h-screen w-full items-center">
      <div
        style={{
          display: "flex",
          height: "90%",
          width: "85%",
        }}
        className="flex-col justify-evenly"
      >
        <span className="font-bold">Personal Settings</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "40%",
            backgroundColor: "whitesmoke",
          }}
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
                height: "80%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid blue",
              }}
            >
              <img src="mm" alt="profile picture" />
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
            {data?.map((item) => {
              return (
                <CustomSpandiv
                  labeled={item.labeled}
                  inputType={item.inputType}
                  placeholder={item.placeholder}
                />
              );
            })}
            <div className="flex justify-around ">
              <a href="#" className="text-blue-500">
                Change name
              </a>
              <a href="#" className="text-blue-500">
                Change email
              </a>
            </div>
            <div className="flex justify-around ">
              <a href="#" className="text-blue-500">
                Change password
              </a>
              <a href="#" className="text-blue-500">
                Change number
              </a>
            </div>
          </div>
        </div>
        <span>Account Settings</span>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "25%",
            width: "100%",
            backgroundColor: "whitesmoke",
          }}
        >
          <DropdownMenu country={countryname.country} />
          
        </div>
        <span>Terminate Account</span>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "10%",
            backgroundColor: "whitesmoke",
          }}
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
}

export default MyAccount