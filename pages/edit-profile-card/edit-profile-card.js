import { Avatar, Box, VStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import SetProfile from "../../components/setProfile";


const EditProfile = () => {
  return (
    <>
      <VStack
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt={"3rem"}
      >
        <Text as='b' fontSize='3xl'>Edit Profile Card</Text>
        <Text fontSize='1xl'>Free</Text>
        <SetProfile />
        
      </VStack>
    </>
  );
};

export default EditProfile;
