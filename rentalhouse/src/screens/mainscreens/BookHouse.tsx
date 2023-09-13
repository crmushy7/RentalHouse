import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Grid,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Bookhouse({ onClose, state, userdata }) {
  const { isOpen, onOpen } = useDisclosure();
  const firstField = React.useRef();
  const [isAgreementVisible, setIsAgreementVisible] = useState(false);
  // const [currentDate, setCurrentDate] = useState(new Date());
  // const [futuredate, setFutureDate] = useState();
  // const [initialdate, setInitialDate] = useState();
  // const [days, setDays] = useState(0);
  const [selectedValue, setSelectedValue] = useState("0");

  useEffect(() => {
    onOpen();

    // const dateObject = new Date();
    // // const date = dateObject.getDate();
    // // const month = dateObject.toLocaleString("default", { month: "short" });
    // // const year = dateObject.getFullYear();

    // // setCurrentDate(`${date} ${month} ${year}`);

    // const initialDateObject = new Date(dateObject);
    // initialDateObject.setDate(dateObject.getDate() + 10);
    // const initialDateDay = initialDateObject.getDate();
    // const initialDateMonth = initialDateObject.toLocaleString("default", {
    //   month: "short",
    // });
    // const initialDateYear = initialDateObject.getFullYear();

    // // setInitialDate(`${initialDateDay} ${initialDateMonth} ${initialDateYear}`);

    // const futureDateObject = new Date(dateObject);
    // futureDateObject.setDate(dateObject.getDate() + 0);
    // const futureDateDay = futureDateObject.getDate();
    // const futureDateMonth = futureDateObject.toLocaleString("default", {
    //   month: "short",
    // });
    // const futureDateYear = futureDateObject.getFullYear();

    // setFutureDate(`${futureDateDay} ${futureDateMonth} ${futureDateYear}`);
  }, [onOpen]);

  const toggleAgreementVisibility = () => {
    setIsAgreementVisible(!isAgreementVisible);
  };
  const tenantname =
    userdata.login.user.firstName +
    " " +
    userdata.login.user.middleName +
    " " +
    userdata.login.user.lastname;
  const fullName =
    state.user.firstName +
    " " +
    state.user.middleName +
    " " +
    state.user.lastname;
  const [price, setPrice] = useState(parseInt(state.price));
  const houseName = state.name;
  const houseAdress = state.Region + "-" + state.District + "-" + state.Ward;
  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    const newprice = parseInt(event.target.value);
    setPrice(newprice * parseInt(state.price));
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={() => {
          onClose();
        }}
        finalFocusRef={firstField}
        scrollBehavior="inside"
      >
        <DrawerOverlay />
        <DrawerContent className="flex h-auto">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">HOUSE BOOKING</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Stack spacing="24px">
                  <Box>
                    <FormLabel htmlFor="username">OWNER NAME</FormLabel>
                    <Input placeholder={fullName} readOnly />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="username">OWNER NUMBER</FormLabel>
                    <Input placeholder={state.user.phoneNumber} readOnly />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="username">OWNER EMAIL</FormLabel>
                    <Input placeholder={state.user.username} readOnly />
                  </Box>
                </Stack>

                <Stack spacing="24px">
                  <Box>
                    <FormLabel htmlFor="username">YOUR NAME</FormLabel>
                    <Input placeholder={tenantname} readOnly />
                  </Box>
                  <Box>
                    <FormLabel htmlFor="owner">
                      SELECT DURATION OF STAY
                    </FormLabel>
                    <Select
                      id="owner"
                      value={selectedValue}
                      onChange={handleOption}
                    >
                      <option value="0">Select Duration</option>
                      <option value="30">1 month</option>
                      <option value="60">2 months</option>
                      <option value="90">3 months</option>
                      <option value="120">4 months</option>
                      <option value="150">5 months</option>
                      <option value="180">6 months</option>
                      <option value="210">7 months</option>
                      <option value="240">8 months</option>
                      <option value="270">9 months</option>
                      <option value="300">10 months</option>
                      <option value="330">11 months</option>
                      <option value="365">1 year</option>
                    </Select>
                  </Box>
                  {/* <Box>
                    <FormLabel htmlFor="username">
                      TO STAY FROM-TO DATE
                    </FormLabel>
                    <Input placeholder="Enter the stay dates" readOnly />
                  </Box> */}
                  <Box>
                    <FormLabel htmlFor="username">TOTAL PRICE</FormLabel>
                    <Input value={price} readOnly />
                  </Box>
                </Stack>
              </Grid>
              <Box>
                <FormLabel htmlFor="desc">HOUSE DESCRIPTION</FormLabel>
                <Textarea id="desc" placeholder={state.Description} readOnly />
              </Box>
              <Box>
                <FormLabel htmlFor="agreement">
                  Agreement
                  <Button
                    variant="link"
                    onClick={toggleAgreementVisibility}
                    ml={2}
                  >
                    {isAgreementVisible ? "Hide Agreement" : "Show Agreement"}
                  </Button>
                </FormLabel>
                {isAgreementVisible && (
                  <Box border="1px" p="4" borderRadius="lg">
                    <Text fontSize="xl" fontWeight="bold">
                      HOUSE AGREEMENT
                    </Text>
                    <Text>
                      This House Agreement is entered into on date __________ ,
                      by and between:
                    </Text>
                    <Text fontWeight="bold">Owner:</Text>
                    <Text>
                      Name: {fullName}
                      <br />
                      Address:{state.Region}
                    </Text>
                    <Text fontWeight="bold">Tenant:</Text>
                    <Text>
                      Name: {tenantname}
                      <br />
                      Address: -
                    </Text>
                    <Text fontWeight="bold">
                      Hereinafter collectively referred to as the "Parties."
                    </Text>
                    <Text fontWeight="bold">Property Details:</Text>
                    <Text>
                      House Name: {houseName}
                      <br />
                      Address: {houseAdress}
                    </Text>
                    <Text fontWeight="bold">Term of Rental:</Text>
                    <Text>
                      This Agreement shall commence on date ______________ and
                      shall continue until date ____________ .
                    </Text>
                    <Text fontWeight="bold">Total Price:</Text>
                    <Text>
                      The Tenant agrees to pay the Owner a total rent of
                      <span className="font-bold"> ${price}</span> for the
                      Rental Period.
                    </Text>
                    <Text fontWeight="bold">Renewal Option:</Text>
                    <Text>
                      Upon the expiration of the Initial Rental Period, the
                      Tenant may have the option to renew this Agreement for an
                      additional term, subject to the following conditions:
                      <br />
                      1. The Tenant must provide written notice of their intent
                      to renew at least 10 days before the expiration of the
                      Initial Rental Period.
                      <br />
                      2. The Owner may choose to accept or reject the Tenant's
                      request for renewal.
                      <br />
                      3. If the Owner accepts the Tenant's request for renewal,
                      the terms and conditions of this Agreement may be subject
                      to negotiation, including any changes in rent or other
                      terms.
                    </Text>
                    <Text fontWeight="bold">Terms and Conditions:</Text>
                    <Text>
                      1. **Payment:** The Tenant shall pay the total rent for
                      the Initial Rental Period in advance, on or before the
                      20th day of each month. Failure to make timely payments
                      may result in eviction.
                      <br />
                      2. **Security Deposit:** A security deposit of
                      <span className="font-bold">
                        {" "}
                        ${price - 0.5 * price}{" "}
                      </span>
                      shall be paid by the Tenant upon signing this Agreement.
                      The security deposit will be returned to the Tenant, minus
                      any deductions for damages or unpaid rent, within 10 days
                      after the termination of this Agreement.
                      <br />
                      3. **Maintenance and Repairs:** The Tenant is responsible
                      for routine maintenance and minor repairs. The Owner shall
                      be responsible for major structural repairs.
                      <br />
                      4. **Utilities:** Unless otherwise stated, the Tenant is
                      responsible for all utility bills, including water,
                      electricity, gas, and internet.
                      <br />
                      5. **Termination:** Either party may terminate this
                      Agreement with written notice of at least 15 days before
                      the intended termination date.
                      <br />
                      6. **Pets:** Pets are allowed in the property
                      <br />
                      7. **Use of Property:** The Tenant shall use the property
                      solely for residential purposes and shall not sublease or
                      assign the property without the written consent of the
                      Owner.
                      <br />
                      8. **Maintenance of Property:** The Tenant shall keep the
                      property clean and in good condition, and shall promptly
                      report any damages or necessary repairs to the Owner.
                      <br />
                      9. **Compliance with Laws:** The Tenant shall comply with
                      all applicable laws and regulations governing the use and
                      occupancy of the property.
                      <br />
                      10. **Governing Law:** This Agreement shall be governed by
                      and construed in accordance with the laws of the region of
                      <span> {state.Region}</span>.
                    </Text>
                    <Text>
                      This Agreement represents the entire understanding between
                      the Parties and supersedes any prior agreements or
                      understandings, whether oral or written. Any modifications
                      to this Agreement must be made in writing and signed by
                      both Parties.
                    </Text>
                    <Text fontWeight="bold">Owner's Signature:</Text>
                    <Text>
                      _______________________________
                      <br />
                      <p className="underline">{fullName}</p> Date:
                      ______________
                    </Text>
                    <Text fontWeight="bold">Tenant's Signature:</Text>
                    <Text>
                      _______________________________
                      <br />
                      <p className="underline">{tenantname}</p> Date:
                      ______________
                    </Text>
                  </Box>
                )}
              </Box>
              <Box className="flex w-full justify-end items-end mb-12">
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Submit</Button>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Bookhouse;
