import {
    VStack,
    Button,
    Text,
    Box,
    Stack,
    Divider,
    Circle,
    Image,
    HStack,
    Center
  } from "@chakra-ui/react";
  import { ChevronRightIcon } from '@chakra-ui/icons'

  import { Stepper } from "../../components/stepper";

const ProfileCard = () => {
    return(
        <VStack
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt={"3rem"}
      >
            <Stepper data={{createAccount: true, createCard: true}}/>
            <Divider />
            <HStack
                borderWidth='1px'
                borderRadius='md'
            >
                <Circle size='40px' bg='lightgreen'>
                    <Box as='span' fontWeight='bold' fontSize='lg'>
                        TH
                    </Box>
                </Circle>
                <Box>
                Tom Holland
                </Box>
            </HStack>
            <Box w='100%'>
                <Center>
                    <VStack>
                        <Text as='b' fontSize='4xl'>Create a Profile card</Text>
                        <Text fontSize='sm'>Create your new profile card and develop you business (Demo)</Text>
                    </VStack>
                </Center>
                <Box w='100%' display={'flex'} alignItems='center'>
                    <Box  display='flex' mt='10' mr='20' ml='20' padding={'5'} alignItems='center' maxW='sm' borderWidth='1px' borderRadius='lg' borderColor={'lightgrey'}>
                        <VStack flexFlow={'wrap'}>
                            <Box display='flex' p='2' alignItems='center' borderWidth='1px' borderRadius='lg' borderColor={'lightgrey'}>
                                <VStack mr='0'>
                                    <Image src='https://bit.ly/dan-abramov' alt={'image'} />
                                    <Text fontSize='sm'>I am</Text>
                                    <Text as='b' fontSize='Xl'>John Doe</Text>
                                    <Text fontSize='sm'>Founder and CEO at Fresh Farm</Text>
                                </VStack>
                            </Box>
                            <Stack mr={'0'}>
                                <Text as='b' fontSize='xl'>Free</Text>
                                <Text fontSize='sm'>Classic text, add Photo, add Logo</Text>                            
                                <Button colorScheme='blue' rightIcon={<ChevronRightIcon />} >
                                    Select
                                </Button> 
                            </Stack>
                        </VStack>
                    </Box>

                    <Box  display='flex' mt='10' mr='20' ml='20' padding={'5'} alignItems='center' maxW='sm' borderWidth='1px' borderRadius='lg' borderColor={'lightgrey'}>
                        <VStack flexFlow={'wrap'}>
                            <Box display='flex' p='2' alignItems='center' borderWidth='1px' borderRadius='lg' borderColor={'lightgrey'}>
                                <VStack mr='0'>
                                    <Image src='https://bit.ly/dan-abramov' alt={'image'} />
                                    <Text fontSize='sm'>I am</Text>
                                    <Text as='b' fontSize='Xl'>John Doe</Text>
                                    <Text fontSize='sm'>Founder and CEO at Fresh Farm</Text>
                                </VStack>
                            </Box>
                            <Stack mr={'0'}>
                                <Text as='b' fontSize='xl'>Premium</Text>
                                <Text fontSize='sm'>Classic text, add Photo, add Logo</Text>                            
                                <Button colorScheme='blue' rightIcon={<ChevronRightIcon />}>
                                    Select
                                </Button> 
                            </Stack>
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </VStack>
    )
}

export default ProfileCard;