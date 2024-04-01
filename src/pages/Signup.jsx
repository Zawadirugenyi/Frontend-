import React, { useEffect } from 'react';
import { Stack, Box, Text, Input, Button, Center } from '@chakra-ui/react';

export const Signup = () => {
 useEffect(() => {
    // Prevent scrolling
   

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
 }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

 return (
    <Center height="100vh" width="100%">
      <Stack width="1728px" height="1117px" maxWidth="100%" background="#FFFFFF">
         <Stack
        direction="row"
        justify="flex-start"
        align="center"
        spacing="220px"
      >
        <Stack
          paddingX="90px"
          paddingY="394px"
          justify="flex-start"
          align="flex-start"
          spacing="10px"
          overflow="hidden"
          background="#2B6CB0"
        >
          <Stack justify="flex-start" align="center" spacing="55px">
            <Text
              fontFamily="Inter"
              lineHeight="1.56"
              fontWeight="semibold"
              fontSize="18px"
              color="#FFFFFF"
            >
              Student hostels
            </Text>
            <Text
              fontFamily="Inter"
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
        <Stack justify="center" align="center" spacing="47px">
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="semibold"
              textAlign="center"
              fontSize="18px"
              color="#05559F"
              width="175px"
            >
             SignUp to our Hostel
            </Text>
            <Input
             fontFamily="Raleway"
              placeholder="Email"
              size="xs"
              width="360px"
              height="60px"
              maxWidth="100%"
            />
            <Input
             fontFamily="Raleway"
              placeholder="Password"
              size="xs"
              width="360px"
              height="60px"
              maxWidth="100%"
            />

             <Input
             fontFamily="Raleway"
              placeholder="Confirm Password"
              size="xs"
              width="360px"
              height="60px"
              maxWidth="100%"
            />
        
            <Button
             fontFamily="Raleway"
              size="lg"
              colorScheme="blue"
              width="360px"
              height="60px"
              maxWidth="100%"
            >
              Signup
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
 );
};

export default Signup;
