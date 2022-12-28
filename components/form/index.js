import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const TextField = ({value, type, formHelperText, onChange, placeholder, }) => {
  return (
    <FormControl>
      <FormLabel>{value}</FormLabel>
      <Input type={type} onChange={onChange} placeholder={placeholder}   />
      <FormHelperText>{formHelperText}</FormHelperText>
    </FormControl>
  );
};

export default TextField;
