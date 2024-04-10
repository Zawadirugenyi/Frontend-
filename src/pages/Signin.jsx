import React, { useEffect } from 'react';
import { Stack, Box, Text, Input, Button, Center } from '@chakra-ui/react';

export const Signin = () => {
 useEffect(() => {

    return () => {
      document.body.style.overflow = 'unset';
    };
 }, []); 

 return (
   <Center h="100vh" w="100vw" paddingTop="20%" paddingBottom="20%" marginTop="-15%">
    <Stack direction="row" justify="center" align="center" spacing="55px">
         <Stack
        direction="row"
        justify="flex-start"
        align="center"
        spacing="220px"
      >
        <Stack
          paddingX="90px"
          paddingY="294px"
          marginLeft="56px"
          justify="flex-start"
          align="flex-start"
          spacing="10px"
          overflow="hidden"
          background="#2B6CB0"
        >
          <Stack justify="flex-start" align="center" spacing="55px">
            <Text
              fontFamily="Raleway"
              lineHeight="1.56"
              fontWeight="semibold"
              fontSize="18px"
              color="#FFFFFF"
            >
              Student hostels
            </Text>
            <Text
              fontFamily="Raleway"
              lineHeight="1.56"
              fontWeight="semibold"
              fontSize="18px"
              color="#FFFFFF"
              width="469px"
              maxWidth="100%"
            >
              Welcome to this stunning cottage-like property, nestled on 1.6
              acres of mature{' '}
            </Text>
          </Stack>
        </Stack>
        <Stack justify="center" align="center" spacing="47px" marginLeft="-76px">
            <Text
              fontFamily="Raleway"
              lineHeight="1.56"
              fontWeight="semibold"
              fontSize="36px"
              color="#05559F"
              width="469px"
              maxWidth="100%"
            >
             Login to your Account
            </Text>
            <Input
             fontFamily="Raleway"
              placeholder="Email"
              size="xs"
              width="469px"
              height="60px"
              maxWidth="100%"
            />
            <Input
             fontFamily="Raleway"
              placeholder="Password"
              size="xs"
              width="469px"
              height="60px"
              maxWidth="100%"
            />
        
            <Button
             fontFamily="Raleway"
              size="lg"
              colorScheme="blue"
              width="469px"
              height="60px"
              maxWidth="100%"
            >
              Signin
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
 );
};

export default Signin;
