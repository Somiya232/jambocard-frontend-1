import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const ButtonComponent = ({
  value,
  colorScheme,
  size,
  color,
  onClick,
  variant,
  customStyle,
  customWidth
}) => {
  return (
    <>
      <Button
        colorScheme={colorScheme}
        color={color}
        size={size}
        onClick={onClick}
        variant={variant}
        style={customStyle}
        width={customWidth}
      >
        {value}
      </Button>
    </>
  );
};

export default ButtonComponent;
