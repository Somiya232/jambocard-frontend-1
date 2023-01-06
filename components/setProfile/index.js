import { Avatar, Box, Container, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ButtonComponent from "../../components/button";
import TextField from "../../components/form";

const SetProfile = () => {
  return (
    <>
      <Container mt="10px">
      <Box
          pt={"2rem"}
          display="flex"
          alignItems={"center"}
          justifyContent="space-evenly"
        >
          <Box display="flex" flexDirection="column" alignItems={"center"}>
            <Avatar size={"2xl"} bg='red.500'/>
            <Text>Upload Profile</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems={"center"}>
            <Avatar size={"2xl"} bg='red.500' />
            <Text>Upload Profile</Text>
          </Box>
        </Box>
        <Box pt={"2rem"} display="flex" flexDirection="column" gap={2}>
          <TextField placeholder={"Name"} />
          <TextField placeholder={"Work Title"} />
          <TextField placeholder={"WhatsApp Number"} />
          <ButtonComponent value={"Preview Card"} />
          <ButtonComponent value={"Save Card"} colorScheme={"blue"} />
        </Box>
      </Container>
    </>
  );
};

export default SetProfile;
