import React, { useState } from "react";

import {
    HStack,
    Circle,
    Box,
    VStack,
    Divider
  } from "@chakra-ui/react";

  export const Stepper = (props) => {
    const [createAccount, setCreateAccount] = useState(props.data.createAccount);
    const [createCard, setCreateCard] = useState(props.data.createCard);
    return (
      <Box width='100%' paddingRight={'10%'} paddingLeft={'10%'}>
        <HStack spacing='100px'>
          <VStack>
            <Circle size='40px' bg='blue' color='white'>
              <Box as='span' fontWeight='bold' fontSize='lg'>
                {createAccount ? 1 : <span>&#10003;</span>}
              </Box>
            </Circle>
            <Box color='blue' w={'max-content'}> Create Accounts</Box>
          </VStack>
          <Divider sx={ createCard ? {borderColor: 'blue'} : {}} />
          <VStack>
            <Circle size='40px' sx={ createCard ? { bg:'blue', color:'white'} : {borderColor: 'lightgrey', border: '1px'}}>
              <Box as='span' fontWeight='bold' fontSize='lg'>
                2
              </Box>
            </Circle>
            <Box color='blue' w={'max-content'}> Create Card</Box>
           </VStack> 
        </HStack>
      </Box>
    );
  };