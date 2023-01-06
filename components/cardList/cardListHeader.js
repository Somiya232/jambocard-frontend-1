import { HStack, Box, Button, Text } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { SwitchAccountMenuBar } from "../switchAccountMenuBar";

export const CardListHeader = () => {
  
  return (
    <Box>
        <Box display={'flex'} justifyContent='space-between' mt='2%' mr='10%' ml='10%'>
            <HStack>
                <Button><RxHamburgerMenu /></Button>
                <Text>LOGO</Text>
            </HStack>
            <HStack>
                <Button><CiBellOn /></Button>
                <Button><CiSearch /></Button>
                <SwitchAccountMenuBar />               
            </HStack>
        </Box>
    </Box>
  );
};
