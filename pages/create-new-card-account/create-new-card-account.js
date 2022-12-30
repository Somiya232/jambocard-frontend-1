import React from "react";
import { Box, Container, Text, Select, Checkbox } from "@chakra-ui/react";
import TextField from "../../components/form";
import ButtonComponent from "../../components/button";
import { Toaster } from "react-hot-toast";
const CreateNewCardAccount = () => {
  return (
    <>
    <Toaster />
      <Container >
        <Box pt={"3rem"}>
          <Text fontSize="4xl" fontWeight={"bold"}>
            {" "}
            Create New Card Account{" "}
          </Text>
          <Text fontSize="sm" opacity={"0.5"}>
            {" "}
            Create your new Jambocard account (Demo){" "}
          </Text>
        </Box>
        <Box pt="2rem" display={"flex"} flexDirection="column" gap={4}>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <TextField type="Name" placeholder={"Name"} />
          <Checkbox>
            {" "}
            <Text fontSize="sm" opacity={"0.5"}>
              {" "}
              Accept terms and conditions{" "}
            </Text>{" "}
          </Checkbox>
          <ButtonComponent value={"Create Account"} colorScheme={"blue"} />
        </Box>
      </Container>
    </>
  );
};

export default CreateNewCardAccount;
