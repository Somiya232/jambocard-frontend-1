import React, { useState } from "react";

import { HStack, Circle, Box, VStack, Divider } from "@chakra-ui/react";

export const SingleStep = ({ data, index, noOfStepper, activePosition }) => {
    const active = data.active;
    console.log(activePosition);
    console.log(index);

  return (
    <HStack sx={noOfStepper === index +1 ? {} : {width:'-webkit-fill-available', alignItems:'baseline'}}>
        <VStack>
            <Circle size="40px" sx={active ? {bg:"blue", color:"white"} : {borderColor: "lightgrey", border: "1px"}}>
                <Box as="span" fontWeight="bold" fontSize="lg">
                    {index+1}
                </Box>
            </Circle>
            <Box sx={active ? {color:'blue'} : {}} w={"max-content"}>
            {data.content}
            </Box>
        </VStack>
        {noOfStepper === index +1 ? null : <Divider sx={(index +1) < activePosition ? { borderColor: "blue" } : { borderColor: "grey"}} />}
        
    </HStack>
  );
};
