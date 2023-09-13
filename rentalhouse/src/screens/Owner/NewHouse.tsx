

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getUserAccessToken } from "../../utils/localStorageUtils";
import { useQueryClient } from "@tanstack/react-query";
import { CreateHouseInputMutation, useCreateHouseInputMutation } from "../../generated/graphql";
import { notifications } from "@mantine/notifications";
import graphqlRequestClient from "../../lib/clients/GraphqlRequestClients";
import { GraphQLError } from "graphql";

function NewHouse({ onClose }) {
  const { isOpen, onOpen } = useDisclosure();
  const firstField = React.useRef();
  const [isAgreementVisible, setIsAgreementVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [futuredate, setFutureDate] = useState();
  const [initialdate, setInitialDate] = useState();
  const [days, setDays] = useState(0);
  const [selectedValue, setSelectedValue] = useState("0");
    const [accessToken, setAccessToken] = useState<string | null>(
      getUserAccessToken()
    );
    const queryClient = useQueryClient();
    const [graphQLError, setGraphQLError] = useState<string | null>(null);
    const [imgUrl, setImgurl] = useState<Array>([]);
    const [value, setValue] = useState<string>("");
    const [houseRegion, setHouseregion] = useState<string>("");
    const [houseName, setHousename] = useState<string>("");
    const [houseDistrict, setHouseDistrict] = useState<string>("");
    const [houseWard, setHouseWard] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>();
    const { mutate } = useCreateHouseInputMutation(
      graphqlRequestClient.setHeaders({
        Authorization: `Bearer ${accessToken}`,
      }),
      {
        onSuccess: (data: CreateHouseInputMutation) => {
          queryClient.invalidateQueries(["getMyHouses"]);
          return success("");
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
            zIndex: 9999,
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
      setTimeout(() => {}, 1000);
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
            success("Image added!");
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
            zIndex: 9999,
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

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  

  return (
    <div className="notification">
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={() => {
          onClose();
        }}
        size={{
          base: "full",
          sm: "full",
          md: "sm",
          lg: "md",
          xl: "md",
        }}
        finalFocusRef={firstField}
        scrollBehavior="inside"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">NEW HOUSE</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Grid templateColumns="repeat(1, 1fr)" gap={6}>
                <Stack spacing="24px">
                  <Box>
                    <FormLabel htmlFor="username">HOUSE NAME</FormLabel>
                    <Input
                      placeholder="Write house name"
                      value={houseName}
                      onChange={(e) => setHousename(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="username">HOUSE REGION</FormLabel>
                    <Input
                      placeholder="Write house region"
                      value={houseRegion}
                      onChange={(e) => setHouseregion(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="username">HOUSE DISTRICT</FormLabel>
                    <Input
                      placeholder="Write house district"
                      value={houseDistrict}
                      onChange={(e) => setHouseDistrict(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="username">HOUSE WARD</FormLabel>
                    <Input
                      placeholder="Write house ward"
                      value={houseWard}
                      onChange={(e) => setHouseWard(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="desc">HOUSE DESCRIPTION</FormLabel>
                    <Textarea
                      id="desc"
                      placeholder="Write your house details"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="username">HOUSE IMAGE URL</FormLabel>

                    <Box display="flex" alignItems="center">
                      <Input
                        flex="1"
                        placeholder="Add house images using urls"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <Button
                        colorScheme="blue"
                        w="20%"
                        ml="2"
                        onClick={addImage}
                      >
                        Add
                      </Button>
                    </Box>
                  </Box>

                  <Box>
                    <FormLabel htmlFor="username">TOTAL PRICE</FormLabel>
                    <Input
                      placeholder="price"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                    />
                  </Box>
                  <Box className="flex w-full justify-end items-end mb-5">
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="blue" onClick={addHouse}>
                      Upload
                    </Button>
                  </Box>
                </Stack>
              </Grid>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px"></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NewHouse;
