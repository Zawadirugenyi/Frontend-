import React from 'react';
import { Stack, Text, Button, Select, Input, Icon } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

export const Navbar = () => (
 <Stack width="100%" height="400px" background="#FFFFFF">
    <Stack
      paddingX="60px"
      paddingY="20px"
      justify="flex-start"
      align="flex-start"
      spacing="10px"
      overflow="hidden"
      background="#FFFFFF"
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Stack
        direction="row"
        justify="flex-start"
        align="center"
        spacing="227px"
      >
        <Text
          fontFamily="Raleway"
          lineHeight="0.42"
          fontWeight="regular"
          fontSize="48px"
          color="#114B89"
        >
          Hostels
        </Text>
        <Stack
          direction="row"
          justify="flex-start"
          align="center"
          spacing="214px"
        >
          <Stack
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="63px"
          >
            <Text
              fontFamily="Raleway"
              lineHeight="0.56"
              fontWeight="regular"
              fontSize="20px"
              color="#000000"
            >
              Home
            </Text>
            <Text
              fontFamily="Raleway"
              lineHeight="0.56"
              fontWeight="regular"
              fontSize="20px"
              color="#000000"
            >
              About us
            </Text>
            <Text
              fontFamily="Raleway"
              lineHeight="0.56"
              fontWeight="regular"
              fontSize="18px"
              color="#000000"
            >
              Contact us
            </Text>
          </Stack>
          <Stack
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="18px"
            marginLeft="196px"
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
        paddingX="33px"
        paddingY="18px"
        borderRadius="6px"
        width="750px"
        height="72px"
        maxWidth="100%"
        background="E4EAF1"
        marginTop="20px"
        align="center"
        marginLeft="auto" // Center the Stack horizontally
        marginRight="auto" // Center the Stack horizontally
      >
        <Stack direction="row" justify="flex-start" align="center" spacing="41px">
          <Select placeholder="Category" size="sm" width="181px" height="36px" fontSize="16px" fontFamily="Raleway">
            <option value="bedsitter">Bedsitter</option>
            <option value="one-bedroom">One Bedroom</option>
            <option value="two-bedrooms">Two Bedrooms</option>
            <option value="three-bedrooms">Three Bedrooms</option>
          </Select>
          <Select placeholder="Location" size="sm" width="181px" height="36px" ffontSize="16px" ontFamily="Raleway">
            <option value="athi-river">Athi-River</option>
            <option value="vellery-road">Vellery Road</option>
            <option value="langata">Langata</option>
            <option value="highrise">Highrise</option>
          </Select>
          <Input placeholder="Ksh" size="xs" width="166px" fontSize="16px" height="36px" fontFamily="Raleway" />
          <Icon as={BsSearch} marginLeft="10px"color="#05559F" boxSize="20px" />
        </Stack>
      </Stack>
    </Stack>
 </Stack>
);

export default Navbar;
