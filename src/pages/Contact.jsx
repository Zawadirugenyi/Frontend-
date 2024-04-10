import React from 'react';
import { Center, Stack, Text, Input, Button, Image } from '@chakra-ui/react';
import Contact_photo from '../components/images/photo_6010393430800317782_y.jpg';

export const Contactus = () => (
 <Center h="100vh" w="100vw" paddingTop="20%" paddingBottom="20%" marginTop="-15%">
    <Stack direction="row" justify="center" align="center" spacing="55px">
      <Stack justify="center" align="center" spacing="60px" marginLeft="-55px">
        <Text
          fontFamily="Raleway"
          fontWeight="semibold"
          fontSize="36px"
          color="#2B6CB0"
          width="353px"
          height="60px"
          maxWidth="100%"
        >
          Connect with us
        </Text>
        <Stack justify="center" align="center" spacing="42px">
          <Stack justify="center" align="center" spacing="26px">
            <Input
              placeholder="Your FullName"
              fontFamily="Raleway"
              size="xs"
              width="474px"
              height="60px"
              maxWidth="100%"
            />
            <Input
              placeholder="Your Email"
              size="xs"
              fontFamily="Raleway"
              width="474px"
              height="60px"
              maxWidth="100%"
            />
            <Input
              placeholder="Your Subject"
              size="xs"
              fontFamily="Raleway"
              width="474px"
              height="60px"
              maxWidth="100%"
            />
            <Input
              placeholder="Your Message"
              size="xs"
              width="474px"
              fontFamily="Raleway"
              height="90px"
              maxWidth="100%"
              borderColor="gray.200"
              borderWidth="1px"
            />
          </Stack>
          <Button
            size="lg"
            fontFamily="Raleway"
            colorScheme="blue"
            width="474px"
            height="48px"
            maxWidth="100%"
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    <Image
        src={ Contact_photo } 
        alt="INSERT_ALT"
        width="50%"
        height="552px"
        maxWidth="70%"
        objectFit="cover"
        marginRight="-34px"
      />
    </Stack>
 </Center>
);
export default Contactus;
