import React from "react";
import {
    Card,
    Image,
    CardBody,
    CardFooter,
    Text,
    Box,
    VStack,
    HStack,
    Link,
    Button,
  } from "@chakra-ui/react";

const ProfileCard = () => {
  return (
    <>
    <Box display='flex' alignItems='center' borderWidth='1px' borderRadius='lg' borderColor={'lightgrey'}>
        <HStack alignItems={'end'}>
            <Image src='https://bit.ly/dan-abramov' alt={'image'} />
            <VStack alignItems='flex-start' marginBottom={'0%'}>
                <Text as='b' fontSize='Xl'>John Doe</Text>
                <Text fontSize='sm'>Textiles</Text>
            </VStack>
        </HStack>
    </Box>
    </>
  );
};

export default ProfileCard;
