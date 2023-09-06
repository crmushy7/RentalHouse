import { Textarea } from "@mantine/core";
import React, { useState } from "react";
import AllHouses from "../AllHouses";
import { useLocation, useNavigate } from "react-router";
import { AccountType } from '../../../lib/enums/enum';

const CustomDetails = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState("Initial name");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("Initial name");
  const [bordered, setBordered] = useState("");
  const [border, setBorder] = useState(2);
  const navigate = useNavigate();
  const { state } = useLocation();
  // console.log('my states',state.user.accountType)

  const handleToggleEdit = () => {};
  const handleBack=()=>{
    if (state.user.accountType === "Owner") {
      navigate("/home");
    }else{
       navigate("/TenantHomepage");
    }
  }

  return (
    <div className="flex w-full h-full border border-black  justify-center overflow-auto flex-col">
      <span className="flex w-full flex-col justify-center h-auto pl-4  ">
        <span>Name</span>
        <input
          type="text"
          value={state.name}
          readOnly={true}
          className={`border-2  max-h-12 w-5/6 rounded-lg pl-4 h-16 `}
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
        <span className="mt-4">Description</span>
        <Textarea
          value={state.Description}
          autosize
          readOnly={true}
          minRows={2}
          className={`flex overflow-auto w-5/6 flex-col  rounded-md`}
        />
      </span>
      <div className="flex h-auto justify-evenly mt-4">
        {" "}
        <button
          className="border p-3 rounded-xl bg-slate-400 w-28"
          
        >
          Like
        </button>
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
    </div>
  );
};

export default CustomDetails;
