import React from 'react';
import { Stack, Text } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

export const Footer = () => (
  <Stack
    paddingX="150px"
    paddingY="40px"
    direction="row"
    justify="flex-start"
    align="flex-start"
    spacing="400px"
    overflow="hidden"
    width="1728px"
    maxWidth="100%"
    background="#033461"
  >
    <Stack justify="flex-start" align="flex-start" spacing="79px">
      <Text
        fontFamily="Raleway"
        lineHeight="0.42"
        fontWeight="medium"
        fontSize="48px"
        color="#FFFFFF"
      >
        Hostels
      </Text>
      <Text
        fontFamily="Raleway"
        fontWeight="regular"
        fontSize="15px"
        color="#FFFFFF"
      >
        Satisfaction is our duty
      </Text>
    </Stack>
    <Stack justify="flex-start" align="center" spacing="44px">
      <Text
        fontFamily="Raleway"
        lineHeight="0.83"
        fontWeight="medium"
        fontSize="24px"
        color="#FFFFFF"
      >
        Useful Links
      </Text>
      <Text
        fontFamily="Raleway"
        fontWeight="regular"
        fontSize="18px"
        color="#FFFFFF"
        width="133px"
        height="20px"
      >
        About Us
      </Text>
      <Text
        fontFamily="Raleway"
        fontWeight="regular"
        fontSize="18px"
        color="#FFFFFF"
        width="133px"
        height="20px"
      >
        Contact Us
      </Text>
    </Stack>
    <Stack justify="flex-start" align="flex-start" spacing="38px">
      <Text
        fontFamily="Raleway"
        lineHeight="0.83"
        fontWeight="medium"
        fontSize="18px"
        color="#FFFFFF"
      >
        Contact Us
      </Text>
      <Stack direction="row" justify="flex-start" align="center" spacing="32px">
        <EmailIcon data-icon="CkEmail" color="white" boxSize="20px"/>
        <Text
          fontFamily="Raleway"
          lineHeight="1.43"
          fontWeight="regular"
          fontSize="14px"
          color="#FFFFFF"
        >
          hostels@gmail.com
        </Text>
      </Stack>
      <Stack direction="row" justify="flex-start" align="center" spacing="34px">
        <PhoneIcon data-icon="CkPhone"color="white" boxSize="20px" />
        <Text
          fontFamily="Raleway"
          lineHeight="1.43"
          fontWeight="regular"
          fontSize="14px"
          color="#FFFFFF"
        >
          +254-789-001-987
        </Text>
      </Stack>
    </Stack>
  </Stack>
);
export default Footer;