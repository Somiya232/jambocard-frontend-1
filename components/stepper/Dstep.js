import React, { useState } from "react";

import { HStack, Box } from "@chakra-ui/react";
import { SingleStep } from "./singleStep";

export const Dstep = ({ stepperData, activePosition}) => {

  return (
    <Box width="100%" paddingRight={"10%"} paddingLeft={"10%"}>
      <HStack>
      {stepperData.map((step, i) => (
            <SingleStep data={step} index={i} noOfStepper={stepperData.length} activePosition={activePosition} />
      ))}
      </HStack>
    </Box>
  );
};
