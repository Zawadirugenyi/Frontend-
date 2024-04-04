import React from 'react';
import { Stack, Text, Button, Select, Input, Icon, useBreakpointValue } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

export const Navbar = () => {
 // Example of using useBreakpointValue for dynamic values
 const isLargeScreen = useBreakpointValue({ base: false, md: true });

 return (
    <Stack width="100%" height="400px" background="#FFFFFF">
      <Stack
        paddingX={{ base: "20px", md: "60px" }} // Adjust padding based on screen size
        paddingY="20px"
        justify="flex-start"
        align="flex-start"
        spacing={{ base: "10px", md: "20px" }} // Adjust spacing based on screen size
        overflow="hidden"
        background="#FFFFFF"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      >
        <Stack
          direction="row"
          justify="flex-start"
          align="center"
          spacing={{ base: "10px", md: "227px" }} // Adjust spacing based on screen size
        >
          <Text
            fontFamily="Raleway"
            lineHeight="0.42"
            fontWeight="regular"
            fontSize={{ base: "32px", md: "48px" }} // Adjust font size based on screen size
            color="#114B89"
          >
            Hostels
          </Text>
          <Stack
            direction="row"
            justify="flex-start"
            align="center"
            spacing={{ base: "10px", md: "214px" }} // Adjust spacing based on screen size
          >
            <Stack
              direction="row"
              justify="flex-start"
              align="flex-start"
              spacing={{ base: "10px", md: "63px" }} // Adjust spacing based on screen size
            >
              <Text
                fontFamily="Raleway"
                lineHeight="0.56"
                fontWeight="regular"
                fontSize={{ base: "16px", md: "20px" }} // Adjust font size based on screen size
                color="#000000"
              >
                Home
              </Text>
              <Text
                fontFamily="Raleway"
                lineHeight="0.56"
                fontWeight="regular"
                fontSize={{ base: "16px", md: "20px" }} // Adjust font size based on screen size
                color="#000000"
              >
                About us
              </Text>
              <Text
                fontFamily="Raleway"
                lineHeight="0.56"
                fontWeight="regular"
                fontSize={{ base: "14px", md: "18px" }} // Adjust font size based on screen size
                color="#000000"
              >
                Contact us
              </Text>
            </Stack>
            <Stack
              direction="row"
              justify="flex-start"
              align="flex-start"
              spacing={{ base: "10px", md: "18px" }} // Adjust spacing based on screen size
              marginLeft={{ base: "0", md: "196px" }} // Adjust margin based on screen size
            >
              <Button size="lg" colorScheme="blue" fontFamily="Raleway">
                Login
              </Button>
              <Button size="lg" colorScheme="blue" fontFamily="Raleway">
                Signup
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          paddingX={{ base: "10px", md: "33px" }} // Adjust padding based on screen size
          paddingY="18px"
          borderRadius="6px"
          width={{ base: "100%", md: "750px" }} // Adjust width based on screen size
          height="72px"
          maxWidth="100%"
          background="E4EAF1"
          marginTop="20px"
          align="center"
          marginLeft="auto" // Center the Stack horizontally
          marginRight="auto" // Center the Stack horizontally
        >
          <Stack direction="row" justify="flex-start" align="center" spacing={{ base: "10px", md: "41px" }}>
            <Select placeholder="Category" size="sm" width="181px" height="36px" fontSize="16px" fontFamily="Raleway">
              <option value="bedsitter">Bedsitter</option>
              <option value="one-bedroom">One Bedroom</option>
              <option value="two-bedrooms">Two Bedrooms</option>
              <option value="three-bedrooms">Three Bedrooms</option>
            </Select>
            <Select placeholder="Location" size="sm" width="181px" height="36px" fontSize="16px" fontFamily="Raleway">
              <option value="athi-river">Athi-River</option>
              <option value="vellery-road">Vellery Road</option>
              <option value="langata">Langata</option>
              <option value="highrise">Highrise</option>
            </Select>
            <Input placeholder="Ksh" size="xs" width="166px" fontSize="16px" height="36px" fontFamily="Raleway" />
            <Icon as={BsSearch} marginLeft="10px" color="#05559F" boxSize="20px" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
 );
};

export default Navbar;
