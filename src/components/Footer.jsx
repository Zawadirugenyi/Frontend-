import React from 'react';
import { Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

export const Footer = () => {
 // Use the useBreakpointValue hook to get the current breakpoint
 const isLargerThanMd = useBreakpointValue({ base: false, md: true });

 return (
    <Stack
      paddingX={{ base: "20px", md: "150px" }}
      paddingY="40px"
      direction={{ base: "column", md: "row" }}
      justify="flex-start"
      align="flex-start"
      spacing={{ base: "20px", md: "400px" }}
      overflow="hidden"
      width={{ base: "100%", md: "1728px" }}
      maxWidth="100%"
      background="#033461"
    >
      <Stack justify="flex-start" align="flex-start" spacing="79px">
        <Text
          fontFamily="Inter"
          lineHeight="0.42"
          fontWeight="medium"
          fontSize={{ base: "32px", md: "48px" }}
          color="#FFFFFF"
        >
          Hostels
        </Text>
        <Text
          fontFamily="Raleway"
          fontWeight="regular"
          fontSize={{ base: "14px", md: "16px" }}
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
          fontSize={{ base: "20px", md: "24px" }}
          color="#FFFFFF"
        >
          Useful Links
        </Text>
        <Text
          fontFamily="Raleway"
          fontWeight="regular"
          fontSize={{ base: "14px", md: "18px" }}
          color="#FFFFFF"
          width={{ base: "100%", md: "133px" }}
          height="20px"
        >
          About Us
        </Text>
        <Text
          fontFamily="Raleway"
          fontWeight="regular"
          fontSize={{ base: "14px", md: "18px" }}
          color="#FFFFFF"
          width={{ base: "100%", md: "133px" }}
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
          fontSize={{ base: "16px", md: "18px" }}
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
            fontSize={{ base: "12px", md: "14px" }}
            color="#FFFFFF"
          >
            hostels@gmail.com
          </Text>
        </Stack>
        <Stack direction="row" justify="flex-start" align="center" spacing="34px">
          <PhoneIcon data-icon="CkPhone" color="white" boxSize="20px" />
          <Text
            fontFamily="Raleway"
            lineHeight="1.43"
            fontWeight="regular"
            fontSize={{ base: "12px", md: "14px" }}
            color="#FFFFFF"
          >
            +254-789-001-987
          </Text>
        </Stack>
      </Stack>
    </Stack>
 );
};

export default Footer;
