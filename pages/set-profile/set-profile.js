import { Avatar, Box, Container, Text, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import ButtonComponent from "../../components/button";
import TextField from "../../components/form";
import { Stepper } from "../../components/stepper";

const SetProfile = () => {
  return (
    <>
      <Container mt='10px'>
      <Stepper data={{createAccount: true, createCard: true}} />
      <Divider />
        <Box pt={"3rem"}>
          <Text fontSize="4xl" fontWeight={"bold"}>
            {" "}
            Set Profile{" "}
          </Text>
          <Text fontSize="sm" opacity={"0.5"}>
            {" "}
            Free Card{" "}
          </Text>
        </Box>
        <Box pt={"2rem"} display="flex" alignItems={"center"} justifyContent="space-evenly" >
          <Box  display="flex" flexDirection="column" alignItems={"center"} >
          <Avatar size={"2xl"} />
          <Text>Upload Profile</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems={"center"}>
          <Avatar size={"2xl"}/>
          <Text>Upload Profile</Text></Box>
        </Box>
        <Box pt={"2rem"} display="flex" flexDirection="column" gap={2}>
          <TextField placeholder={"Name"}/>
          <TextField placeholder={"Work Title"}/>
          <TextField placeholder={"WhatsApp Number"}/>
          <ButtonComponent value={"Create Account"} colorScheme={"blue"} />
        </Box>
      </Container>
    </>
  );
};

export default SetProfile;
