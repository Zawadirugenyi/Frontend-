import React from 'react';
import { Stack, Icon, Text } from '@chakra-ui/react';
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

export const Topbar = () => (
 <Stack width="100%" height="60px" background="#033461" align="center" justify="center" overflowX="hidden">
    <Stack
      paddingX="105px"
      paddingY="13px"
      direction="row"
      justify="center"
      align="center"
      spacing="873px" // Adjust based on design
      overflow="hidden"
    >
      <Stack
        direction="row"
        justify="center"
        align="center"
        spacing="30px" // Adjusted spacing between icons
      >
        <Icon as={BsFacebook} color="white" boxSize="20px" />
        <Icon as={BsTwitter} color="white" boxSize="20px" />
        <Icon as={BsLinkedin} color="white" boxSize="20px" />
        <Icon as={AiFillInstagram} color="white" boxSize="20px" />
      </Stack>
      <Stack direction="row" justify="center" align="center" spacing="16px" overflow="hidden"> // Ensure no wrapping
        <EmailIcon data-icon="CkEmail" color="white" boxSize="20px" />
        <Text
          fontFamily="Raleway"
          lineHeight="1.43"
          fontWeight="regular"
          fontSize="16px" // Adjust based on design
          color="#FFFFFF"
        >
          hostels@gmail.com
        </Text>
        <PhoneIcon data-icon="CkPhone" color="white" boxSize="20px" />
        <Text
          fontFamily="Raleway"
          lineHeight="1.43"
          fontWeight="regular"
          fontSize="16px" // Adjust based on design
          color="#FFFFFF"
        >
          +254789001987
        </Text>
      </Stack>
    </Stack>
 </Stack>
);

export default Topbar;
