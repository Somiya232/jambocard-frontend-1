import React, { useState } from "react";
import { Circle, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

export const SwitchAccountMenuBar = (props) => {
  
  return (
    <Menu>
        <MenuButton as={Button} bg='white'>
            <Circle size='40px' bg='lightgreen'>  
                TH 
            </Circle> 
        </MenuButton>
        <MenuList>
            <MenuItem>
                <Circle size='40px' bg='lightgreen' mr='2%'>  
                    TH 
                </Circle>
                    Tom Holland
                </MenuItem>
            <MenuItem>
                <Circle size='40px' bg='lightgreen' mr='2%'>  
                    J 
                </Circle>
                    Julies
            </MenuItem>
        </MenuList>
    </Menu>
  );
};
