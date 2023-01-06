import { Container, Box, IconButton, Text, HStack, Circle, VStack, Button } from "@chakra-ui/react";
// import { HamburgerIcon, SearchIcon, BellIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import React, { useState } from "react";
import { CardListHeader } from '../../components/cardList/cardListHeader';
import { CardListBody } from '../../components/cardList/cardListBody';

const CardLIst = () => {
  return (
    <>
      <Box>
        <CardListHeader />
        <CardListBody />

      </Box>
    </>
  );
};

export default CardLIst;
