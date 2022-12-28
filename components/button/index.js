import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const ButtonComponent = ({ value, colorScheme, size, color, onClick }) => {
  return (
    <>
      <Button  colorScheme={colorScheme}  color={color} size={size} onClick={onClick}>
        {value}
      </Button>
    </>
  );
};

export default ButtonComponent;
