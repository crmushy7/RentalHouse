import { Textarea } from "@mantine/core";
import { Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  UpdateHouseInputMutation,
  useUpdateHouseInputMutation,
} from "../../../generated/graphql";
import { GraphQLError } from "graphql";
import graphqlRequestClient from "../../../lib/clients/GraphqlRequestClients";
import { useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { getUserAccessToken } from "../../../utils/localStorageUtils";

const CustomEditHouse = () => {
  const queryClient = useQueryClient();
  const [isEditable, setIsEditable] = useState(false);
  const { state } = useLocation();
  const [name, setName] = useState(state?.data.name);
  const [price, setPrice] = useState(state?.data.price);
  const [description, setDescription] = useState(state?.data.Description);
  const [bordered, setBordered] = useState("");
  const [border, setBorder] = useState(2);
  const [graphqlError, setGraphqlError] = useState<string | null>("");
  const navigate =useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(
    getUserAccessToken()

  );
  const [actualStatus, setActualStatus] = useState("House Status");
   const statusOptions = ["Available", "Booked"];
  const [shouldFetchData, setShouldFetchData] = useState(false);

  useEffect(() => {
    if (accessToken) {
      setShouldFetchData(true);
      setAccessToken(accessToken)
    }
  }, [accessToken]);

  const { mutate } = useUpdateHouseInputMutation(
    graphqlRequestClient.setHeaders({
      Authorization: `Bearer ${accessToken}`,
    }),
    {
      onSuccess: (data: UpdateHouseInputMutation) => {
        queryClient.invalidateQueries(["createUserInput"]);
        return success(data.updateHouse);
      },
      onError: (error: GraphQLError) => {
        const errorMessage = Array.isArray(
          error.response.errors[0].extensions.originalError.message
        )
          ? error.response.errors[0].extensions.originalError.message.join(", ")
          : error.response.errors[0].extensions.originalError.message;
        setGraphqlError(errorMessage);
      },
    }
  );
  const errorDisplay = (errorMessage:string) => {
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
   const success = (feedback:string) => {
     notifications.show({
       title: "",
       message: `${feedback}`,
       styles: (theme: { colors: { green: any[] }; white: any }) => ({
         root: {
           backgroundColor: theme.colors.green[6],
           borderColor: theme.colors.green[6],

           "&::before": { backgroundColor: theme.white },
         },

         title: { color: theme.white },
         description: { color: theme.white },
         closeButton: {
           color: theme.white,
           "&:hover": { backgroundColor: theme.colors.green[7] },
         },
       }),
       autoClose: 2000,
     });
     setTimeout(() => {
       if (accounttype === "Owner") {
         navigate("/home");
       } else {
         navigate("/TenantHomepage");
       }
     }, 1000);
   };

  const handleToggleEdit = () => {
    if (isEditable) {
      if(actualStatus==='House Status'){
        errorDisplay("Update House status!")
      }else{
      mutate({
        input: {
          Description: description,
          _id: state?.data._id,
          name: name,
          price: Number(price),
          status: actualStatus,
        },
      });
      setIsEditable(!isEditable);}
    } else {
      setBordered("black");
      setBorder(4);
      setIsEditable(!isEditable);
    }
  };
  const handleBack=()=>{
    navigate('/home')
  }

  return (
    <div className="flex  w-screen overflow-auto h-full justify-center flex-col">
      <span className="flex w-full h-auto flex-col justify-center pl-4  ">
        <span>Name</span>
        <input
          type="text"
          value={name}
          readOnly={!isEditable}
          onChange={(e) => setName(e.target.value)}
          className={`border-2 border-${bordered} w-5/6 rounded-lg pl-4 h-[10%]`}
        />
        <span className="mt-4">Region</span>
        <Textarea
          value={state?.data.Region}
          readOnly={true}
          minRows={2}
          className="flex overflow-auto  w-5/6 flex-col h-[10%] border border-black rounded-md"
        />
        <span className="mt-4">District</span>
        <Textarea
          value={state?.data.District}
          readOnly={!true}
          minRows={2}
          className={`flex overflow-auto h-[10%] w-5/6 flex-col border border-black rounded-md`}
        />
        <span className="mt-4">Ward</span>
        <Textarea
          value={state?.data.Ward}
          readOnly={true}
          minRows={2}
          className={`flex overflow-auto h-[10%] w-5/6 flex-col border  border-black rounded-md`}
        />
        <span className="mt-4">Price(In Dollars)</span>
        <input
          type="number"
          value={price}
          readOnly={!isEditable}
          onChange={(e) => setPrice(e.target.value)}
          className={`border-${border} border-${bordered} max-h-12 w-5/6 rounded-lg pl-4 h-16 `}
        />
      </span>
      <span
        className={`flex overflow-auto  w-5/6 flex-col border  border-black rounded-md`}
      >
        <Select
          borderColor="tomato"
          color="black"
          className="text-black bg-white "
          placeholder=" House status"
          value={actualStatus}
          onChange={(event) => setActualStatus(event.target.value)}
        >
          {statusOptions.map((setstatus, index) => (
            <option key={index} value={setstatus}>
              {setstatus}
            </option>
          ))}
        </Select>
      </span>
      <span className="flex flex-col  overflow-auto  w-full pl-4  min-h-min h-auto max-h-28 ">
        <span className="mt-4">Description</span>
        <Textarea
          value={description}
          autosize
          readOnly={!isEditable}
          onChange={(e) => setDescription(e.target.value)}
          minRows={2}
          className={`flex border border-black overflow-auto w-5/6 flex-col border-${border} border-${bordered} rounded-md`}
        />
      </span>
      <div className="flex justify-evenly mt-4">
        <button
          className="border p-3 rounded-xl bg-slate-400 w-28"
          onClick={handleBack}
        >
          Back
        </button>{" "}
        <button
          className="border p-3 rounded-xl bg-slate-400 w-28"
          onClick={handleToggleEdit}
        >
          {isEditable ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default CustomEditHouse;
