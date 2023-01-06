import React from "react";
import {
  Box,
  Container,
  Text,
  Select,
  Checkbox,
  Divider,
  VStack,
} from "@chakra-ui/react";
import TextField from "../../components/form";
import ButtonComponent from "../../components/button";
import { toast, Toaster } from "react-hot-toast";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Stepper } from "../../components/stepper";
const CreateNewCardAccount = () => {
  const router = useRouter();
  const handleSignOut = () => {
    toast("Button Clicked");
    localStorage.clear();
    signOut();
    router.push("/");
  };

  const handleNavigate = () => {
    router.push("/profile-card/profile-card")
  }
  return (
    <>
      <Toaster />
      <VStack
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt={"3rem"}
      >
        <Stepper data={{ createAccount: true, createCard: false }} />
        <Divider />
      </VStack>
      <Container>
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
          <ButtonComponent onClick={handleNavigate} value={"Create Account"} colorScheme={"blue"} />
          <ButtonComponent
            value={"Logout"}
            onClick={handleSignOut}
            colorScheme={"blue"}
          />
        </Box>
      </Container>
    </>
  );
};

export default CreateNewCardAccount;
