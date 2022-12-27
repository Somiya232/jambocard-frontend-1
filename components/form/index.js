import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const TextField = ({value, type, formHelperText, onChange}) => {
  return (
    <FormControl>
      <FormLabel>{value}</FormLabel>
      <Input type={type} onChange={onChange} />
      <FormHelperText>{formHelperText}</FormHelperText>
    </FormControl>
  );
};

export default TextField;
