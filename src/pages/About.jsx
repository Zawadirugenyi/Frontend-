import React from 'react';
import { Center, Stack, Image, Text, Button } from '@chakra-ui/react';
import Kryptons from '../components/images/Kryptons.jpeg';

export const Aboutus = () => (
 <Center h="100vh" w="100vw" paddingTop="20%" paddingBottom="20%" marginTop="-15%">
    <Stack direction="row" justify="center" align="center" spacing="55px">
      <Image
        src={Kryptons} 
        alt="INSERT_ALT"
        width="50%"
        height="552px"
        maxWidth="70%"
        objectFit="cover"
        marginRight="-34px"
      />
      <Stack
        paddingX="56px"
        paddingY="82px"
        direction="row"
        justify="center"
        align="center"
        spacing="10px"
        overflow="hidden"
        background="white"
      >
        <Stack justify="center" align="center" spacing="47px">
          <Stack justify="center" align="center" spacing="51px">
            <Text
              fontFamily="Raleway"
              fontWeight="semibold"
              fontSize="24px"
              color="#05559F"
              width="208px"
              height="39px"
            >
              Who are we?
            </Text>
            <Text
              fontFamily="Raleway"
              fontWeight="regular"
              fontSize="18px"
              color="#000000"
              width="478px"
              height="284px"
              maxWidth="100%"
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. 
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
          </Stack>
          <Button size="lg" colorScheme="blue" fontFamily="Raleway">
            Contact us
          </Button>
        </Stack>
      </Stack>
    </Stack>
 </Center>
);
export default Aboutus;
