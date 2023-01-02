import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import ButtonComponent from '../../components/button'
import TextField from '../../components/form'

const SetProfilePage = () => {
  return (
    <Container>
        <Box pt={"3rem"}>
          <Text fontSize="4xl" fontWeight={"bold"}>
            {" "}
            Set Profile Page{" "}
          </Text>
          <Text fontSize="sm" opacity={"0.5"}>
            {" "}
            Free{" "}
          </Text>
        </Box>
        <Box pt={"2rem"} display="flex" flexDirection="column" gap={2}>
          <TextField placeholder={"About"}/>
          <TextField placeholder={"Chat"}/>
          <TextField placeholder={"Payment Link"}/>
          <TextField placeholder={"Location"}/>
          <ButtonComponent value={"Save"} colorScheme={"blue"} />
        </Box>
    </Container>
  )
}

export default SetProfilePage