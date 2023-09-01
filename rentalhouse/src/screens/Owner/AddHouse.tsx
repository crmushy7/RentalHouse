import React, { FC, useState } from "react";
import Rental from "../../assets/images/Rental.jpeg";
import Account_gender from "../Authentication/components/Account_gender";
import CustomButton from "../Authentication/components/CustomButton";
import CustomLink from "../Authentication/components/CustomLink";
import Custominput from "../Authentication/components/Custominput";
import UseAddHouse from "./components/UseAddHousehook";
import {
  CreateHouseInputMutation,
  useCreateHouseInputMutation,
} from "../../generated/graphql";
import { GraphQLError } from "graphql";
import graphqlRequestClient from "../../lib/clients/GraphqlRequestClients";
import { useQueryClient } from "@tanstack/react-query";
import { getUserAccessToken } from "../../utils/localStorageUtils";

const AddHouse: FC = () => {
  const [data] = UseAddHouse();
  const [accessToken, setAccessToken] = useState<string | null>(
    getUserAccessToken()
  );
  const queryClient = useQueryClient();
  const [graphQLError, setGraphQLError] = useState<string | null>(null);
  const [imgUrl, setImgurl] = useState<Array>([]);
  const [value, setValue] = useState<string>("");
  const [houseRegion, setHouseregion] = useState<string>("");
  const [houseDistrict, setHouseDistrict] = useState<string>("");
  const [houseWard, setHouseWard] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const { mutate } = useCreateHouseInputMutation(
    graphqlRequestClient.setHeaders({ Authorization: `Bearer ${accessToken}` }),
    {
      onSuccess: (data: CreateHouseInputMutation) => {
        queryClient.invalidateQueries(["createUserInput"]);
        return console.log("mutation data", data);
      },
      onError: (error: GraphQLError) => {
        const errorMessage = Array.isArray(
          error.response.errors[0].message.message
        )
          ? error.response.errors[0].message.message.join(", ")
          : error.response.errors[0].message.message;

        setGraphQLError(errorMessage);
      },
    }
  );

  const addImage = () => {
    if (value.length != 0) {
      setImgurl([...imgUrl, value]);

      setValue("");
    } else {
      window.alert("url cannot be empty");
    }
  };
  const addHouse = async () => {
    console.log(imgUrl);

    if (
      houseRegion.length === 0 &&
      houseDistrict.length === 0 &&
      houseWard.length === 0 &&
      price?.toString().length === 0 &&
      description.length === 0
    ) {
      alert("All fields are required");
    } else {
      console.log(houseDistrict);
      await mutate({
        input: {
          Region: houseRegion,
          Ward: houseWard,
          District: houseDistrict,
          status: "Available",
          Description: description,
          imgUrl: imgUrl,
          price: price,
        },
      });
    }

    if (imgUrl.length === 0) {
      window.alert("Add images!!!");
    } else {
      // window.alert("success");
    }
  };
  return (
    <>
      <div
        className="flex flex-col h-full  w-full ml-2  justify-center items-center"
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
          className="flex flex-col justify-center  h-auto w-full  bg-white rounded-lg shadow-2xl"
          style={{ marginTop: "2%", marginBottom: "2" }}
        >
          <span className="flex underline justify-center items-center text-blue-600 w-full font-bold">
            FILL YOUR DETAILS BELOW TO JOIN THE NETWORK!!
          </span>
          <div className="flex w-full justify-evenly ">
            <div className="flex w-11/12  flex-col">
              <span
                style={{
                  marginTop: "5%",
                  color: "#808080",
                  fontWeight: "bold",
                }}
              >
                HOUSE REGION
              </span>
              <input
                style={{
                  backgroundColor: "whitesmoke",
                  width: "100%",
                  padding: "2%",
                  borderRadius: "20px",
                }}
                placeholder="Add house region."
                type="text"
                value={houseRegion}
                onChange={(e) => setHouseregion(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="flex w-full justify-evenly ">
            <div className="flex w-11/12  flex-col">
              <span
                style={{
                  marginTop: "5%",
                  color: "#808080",
                  fontWeight: "bold",
                }}
              >
                HOUSE DISTRICT
              </span>
              <input
                style={{
                  backgroundColor: "whitesmoke",
                  width: "100%",
                  padding: "2%",
                  borderRadius: "20px",
                }}
                placeholder="Add house district"
                type="text"
                value={houseDistrict}
                onChange={(e) => setHouseDistrict(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="flex w-full justify-evenly ">
            <div className="flex w-11/12  flex-col">
              <span
                style={{
                  marginTop: "5%",
                  color: "#808080",
                  fontWeight: "bold",
                }}
              >
                HOUSE WARD
              </span>
              <input
                style={{
                  backgroundColor: "whitesmoke",
                  width: "100%",
                  padding: "2%",
                  borderRadius: "20px",
                }}
                placeholder="Add house ward."
                type="text"
                value={houseWard}
                onChange={(e) => setHouseWard(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="flex w-full justify-evenly ">
            <div className="flex w-11/12  flex-col">
              <span
                style={{
                  marginTop: "5%",
                  color: "#808080",
                  fontWeight: "bold",
                }}
              >
                HOUSE PRICE
              </span>
              <input
                style={{
                  backgroundColor: "whitesmoke",
                  width: "100%",
                  padding: "2%",
                  borderRadius: "20px",
                }}
                placeholder="Add house price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
          </div>{" "}
          <div className="flex w-full justify-evenly ">
            <div className="flex w-11/12  flex-col">
              <span
                style={{
                  marginTop: "5%",
                  color: "#808080",
                  fontWeight: "bold",
                }}
              >
                HOUSE DESCRIPTION
              </span>
              <input
                style={{
                  backgroundColor: "whitesmoke",
                  width: "100%",
                  padding: "2%",
                  borderRadius: "20px",
                }}
                placeholder="Add house description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          {/* {data?.map((item, index) => {
            return (
              <Custominput
                labeled={item.labeled}
                inputType={item.inputType}
                placeholder={item.placeholder}
                key={index} value={""} onchange={ }              />
            );
          })} */}
          <div className="flex w-full justify-evenly ">
            <div className="flex w-2/3  flex-col">
              <span
                style={{
                  marginTop: "5%",
                  color: "#808080",
                  fontWeight: "bold",
                }}
              >
                HOUSE PICTURE
              </span>
              <input
                style={{
                  backgroundColor: "whitesmoke",
                  width: "100%",
                  padding: "2%",
                  borderRadius: "20px",
                }}
                placeholder="Add house picture url.."
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="flex w-1/5 items-end">
              {" "}
              <button
                onClick={addImage}
                className="flex rounded-full bg-gray-400"
              >
                <span className="p-3">Add photos</span>
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              padding: "4%",
            }}
          >
            <button
              onClick={addHouse}
              className="flex rounded-full bg-gray-400"
            >
              <span className="p-3">Upload House</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddHouse;
