import { HStack, Text, Box, VStack, Button } from "@chakra-ui/react";
import { ProfileCard } from "../card";
import { TiEdit } from "react-icons/ti";
import { useRouter } from "next/router";

export const CardListBody = () => {
    const router = useRouter();
    const handleNavigate = () => {
        router.push("/edit-profile-card/edit-profile-card")
      }
  
  return (
    <Box>
        <Box display={'flex'} justifyContent='space-around' mt='5%'>
        <Box>
            <VStack display={'block'}>
                <HStack >
                    <VStack display={'flex'} justifyContent='space-between'>
                        <Text as={'b'}>Card</Text>
                        <Text>Free</Text>
                    </VStack>
                    <Button>
                        Upgrade Premium
                    </Button>
                </HStack>
                <ProfileCard />
                
                <HStack>
                    <Button>
                        1
                    </Button>
                    <Button onClick={handleNavigate}>
                        <TiEdit />
                    </Button>
                </HStack>
            </VStack>
        </Box>

        <Box>
            <VStack display={'block'}>
                <HStack>
                    <VStack display={'flex'} justifyContent='space-between'>
                        <Text as={'b'}>Card</Text>
                        <Text>Premium</Text>
                    </VStack>
                </HStack>
                <ProfileCard />
                
                <HStack>
                    <Button>
                        1
                    </Button>
                    <Button onClick={handleNavigate}>
                        <TiEdit />
                    </Button>
                </HStack>
            </VStack>
        </Box>



        </Box>
      
    </Box>
  );
};
