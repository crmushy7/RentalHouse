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
import { notifications } from "@mantine/notifications";

const AddHouse: FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(
    getUserAccessToken()
  );
  const queryClient = useQueryClient();
  const [graphQLError, setGraphQLError] = useState<string | null>(null);
  const [imgUrl, setImgurl] = useState<Array<string>>([]);
  const [value, setValue] = useState<string>("");
  const [houseRegion, setHouseregion] = useState<string>("");
  const [houseName, setHousename] = useState<string>("");
  const [houseDistrict, setHouseDistrict] = useState<string>("");
  const [houseWard, setHouseWard] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const { mutate } = useCreateHouseInputMutation(
    graphqlRequestClient.setHeaders({ Authorization: `Bearer ${accessToken}` }),
    {
      onSuccess: (data: CreateHouseInputMutation) => {
        queryClient.invalidateQueries(["getMyHouses"]);
        return success("Success!");
      },
      onError: (error: GraphQLError) => {
        const errorMessage = Array.isArray(
          error.response.errors[0].message.message
        )
          ? error.response.errors[0].message.message.join(", ")
          : error.response.errors[0].message.message;

        setGraphQLError(errorMessage);
        errorDisplay(erroMessage);
      },
    }
  );
  const success = (accounttype) => {
    notifications.show({
      title: "",
      message: `Success!!`,
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
      autoClose: 1000,
    });
    setTimeout(() => {
    
    }, 1000);
  };
  function isValidImageUrl(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;

      img.onload = () => {
        resolve(true); 
      };

      img.onerror = () => {
        resolve(false); 
      };
    });
  }
  const addImage = async () => {
    if (value.length !== 0) {
      try {
        const isValid = await isValidImageUrl(value);

        if (isValid) {
          setImgurl([...imgUrl, value]);
          success('Image added!')
          setValue("");
        } else {
         errorDisplay("Invalid URL. Please provide a valid image URL.");
        }
      } catch (error) {
        console.error("Error checking URL validity:", error);
        errorDisplay("Error checking URL validity:", error);
      }
    } else {
      errorDisplay("URL cannot be empty");
    }
  };

  const errorDisplay = (errorMessage) => {
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
  const addHouse = async () => {
    if (
      houseName.length === 0 ||
      houseRegion.length === 0 ||
      houseDistrict.length === 0 ||
      houseWard.length === 0 ||
      price?.toString().length === 0 ||
      description.length === 0
    ) {
      errorDisplay("All fields required!");
    } else if (imgUrl.length === 0) {
      errorDisplay("Add images!");
    } else if (imgUrl.length < 8) {
      errorDisplay(`Add ${8 - imgUrl.length} more images`);
    } else {
      await mutate({
        input: {
          Region: houseRegion,
          Ward: houseWard,
          District: houseDistrict,
          status: "Available",
          Description: description,
          imgUrl: imgUrl,
          price: price,
          name: houseName,
        },
      });
       setHousename("");
       setHouseregion("");
       setHouseDistrict("");
       setHouseWard("");
       setPrice("");
       setDescription("");
    }
  };
  return (
    <div className="flex w-full overflow-auto h-screen">
      <div
        className={`flex flex-col h-full  w-full overflow-auto md:items-center md:justify-center  `}
        style={{}}
      >
        <div className="flex flex-row justify-center items-center h-auto w-auto    rounded-full ">
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
          className={`flex flex-col justify-center  h-auto w-[570px] xl:w-[760px] sm:w-[550px] lg:w-[560px] md:w-[400px] 2xl:w-[760px]  bg-white rounded-lg shadow-2xl`}
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
                HOUSE NAME
              </span>
              <input
                style={{
                  backgroundColor: "whitesmoke",
                  width: "100%",
                  padding: "2%",
                  borderRadius: "20px",
                }}
                placeholder="Add house name"
                type="text"
                value={houseName}
                onChange={(e) => setHousename(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="flex w-full justify-evenly ">
            <div className="flex w-11/12   flex-col">
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
                <span className="p-1 text-sm">Add photos</span>
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
    </div>
  );
};

export default AddHouse;
