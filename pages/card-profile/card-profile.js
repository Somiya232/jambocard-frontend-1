import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import ButtonComponent from "../../components/button";
import Link from "next/link";

const CardProfile = () => {
  const colors = useColorModeValue(
    ["gray.50", "gray.50", "gray.50"]
    // ['red.900', 'teal.900', 'blue.900'],
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];
  return (
    <>
      <Container pt={"5rem"} pb={"3rem"}>
        <Link href="/set-profile-page/set-profile-page">
        <ButtonComponent
          variant={"outline"}
          value={"Set Your Profile"}
          colorScheme={"pink"}
          customWidth={"100%"}
        /></Link>
      </Container>
      <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
        <TabList display={"flex"} justifyContent={"space-evenly"}>
          <Tab>Gallary</Tab>
          <Tab>Social Feed</Tab>
          <Tab>Documents</Tab>
        </TabList>
        <TabPanels p="2rem" display={"flex"} justifyContent={"space-evenly"}>
          <TabPanel>No Image Uploaded</TabPanel>
          <TabPanel>No Feed Uploaded</TabPanel>
          <TabPanel>No Document Uploaded</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default CardProfile;
