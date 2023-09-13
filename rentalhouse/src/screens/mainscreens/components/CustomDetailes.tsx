import { Textarea } from "@mantine/core";
import React, { useState } from "react";
import AllHouses from "../AllHouses";
import { useLocation, useNavigate } from "react-router";
import { AccountType } from "../../../lib/enums/enum";
import { getUserData } from "../../../utils/localStorageUtils";
import { LoginUserInputMutation } from "../../../generated/graphql";
import { ToastContainer, toast } from "react-toastify";
import { notifications } from "@mantine/notifications";
import Bookhouse from "../BookHouse";

const CustomDetails = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState("Initial name");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("Initial name");
  const [bordered, setBordered] = useState("");
  const [border, setBorder] = useState(2);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showBookhouse, setShowBookhouse] = useState(false);
   const userdata: LoginUserInputMutation | null = getUserData();
   const feedback=(message)=>{
     notifications.show({
       title: "",
       message: `${message}`,
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
       autoClose: 2000,
     });

   }

  const handleToggleEdit = () => {
     if (!userdata) {
        feedback("Please log in to book!")
  }else if(state.status==="Booked"){
        feedback("This house is booked!!");
  }else{
    setShowBookhouse(true);
  }
  };
   const handleCancelBookhouse = () => {
     setShowBookhouse(false); // Close the Bookhouse component
   };
  const handleBack = () => {
   
    if(!userdata){
       navigate("/");
    }
    else if (userdata?.login.user.accountType === "Owner") {
      navigate("/home");
    } else {
      navigate("/TenantHomepage");
    }
  };

  return (
    <div className="flex w-full h-screen pl-3 bg-stone-200 rounded-lg  justify-between overflow-auto flex-col ">
      <div className="flex h-1/6"></div>
      <span className="flex w-full flex-col  pl-4     ">
        <span className="">Name</span>
        <input
          type="text"
          value={state.name}
          readOnly={true}
          className={`border-2  max-h-12 w-5/6 rounded-lg pl-4 md:p-5 h-16 sm:p-10 sm:h-20 2xl:p-10 `}
        />
        <span className="mt-4">Region</span>
        <input
          placeholder="Region"
          value={state.Region}
          readOnly={true}
          className={`border-2  max-h-12 w-5/6 rounded-lg pl-4 h-16 `}
        />
        <span className="mt-4">District</span>
        <input
          placeholder="District"
          value={state.District}
          readOnly={true}
          className={`border-2  max-h-12 w-5/6 rounded-lg pl-4 h-16 `}
        />
        <span className="mt-4">Ward</span>
        <input
          placeholder="Ward"
          value={state.Ward}
          readOnly={true}
          className={`border-2  max-h-12 w-5/6 rounded-lg pl-4 h-16 `}
        />
        <span className="mt-4">Price(in Dollars)</span>
        <input
          type="number"
          value={parseInt(state.price)}
          readOnly={true}
          className={`border-2  max-h-12 w-5/6 rounded-lg pl-4 h-16 `}
        />
        <span className="mt-4 ">Description</span>
        <Textarea
          value={state.Description}
          autosize
          readOnly={true}
          minRows={3}
          className={`flex overflow-auto mb-4 w-5/6 flex-col  rounded-md`}
          style={{height:"50%"}}
        />
      </span>
      <div className="flex  justify-evenly mt-4 ">
       
        <button
          className="border p-3 rounded-xl bg-slate-400 w-28"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="border p-3 rounded-xl bg-slate-400 w-28"
          onClick={handleToggleEdit}
        >
          Book
        </button>
      </div>
      {showBookhouse && <Bookhouse onClose={handleCancelBookhouse} state={state} userdata={userdata} />}
    </div>
  );
};

export default CustomDetails;
