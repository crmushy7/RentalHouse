import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import AllCountries from "./AllCountries";

const DropdownMenu:FC<CustomDropdownprops> = ({country}) => {
  const [selectedItem, setSelectedItem] = useState("Tanzania");

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };
  const [countryname]=AllCountries();

  return (
    <div className="h-24">
      <span>Country</span>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedItem}
        </MenuButton>
        <MenuList>
          {countryname?.map((items,index)=>{
            return(
              <MenuItem key={index} minH="48px" onClick={() => handleMenuItemClick(items.country)}>
            <span>{items.country}</span>
          </MenuItem>
            )
          })}
          
        </MenuList>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
