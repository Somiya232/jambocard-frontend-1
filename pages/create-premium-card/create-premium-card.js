import React from "react";
import {
  Text,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { toast, Toaster } from "react-hot-toast";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Stepper } from "../../components/stepper";
import { Dstep } from "../../components/stepper/Dstep";
import SetProfile from "../../components/setProfile";


const CreatePremiumCard = () => {
  const router = useRouter();
  const handleSignOut = () => {
    toast("Button Clicked");
    localStorage.clear();
    signOut();
    router.push("/");
  };

  const handleNavigate = () => {
    router.push("/profile-card/profile-card")
  }

  const stepperData = [{content:'Select Template', active: true}, {content:'Set Profile', active: false}, {content:'Create Card', active: false}]
  return (
    <>
      <Toaster />
      <VStack
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt={"3rem"}
      >
        <Stepper data={{ createAccount: true, createCard: false }}/>
        <Dstep activePosition={1} stepperData={stepperData}/>
        <Divider />
        <Text as='b' fontSize='3xl'>Set Profile</Text>
        <Text fontSize='1xl'>Premium</Text>
        <SetProfile />
        
      </VStack>
    </>
  );
};

export default CreatePremiumCard;
