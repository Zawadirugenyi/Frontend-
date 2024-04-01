import React from 'react';
import { Text, Box } from '@chakra-ui/react';

export const Ffoter = () => (
 <Box
    minHeight="23px" // Ensure the Box takes up at least the full viewport height
    display="flex" // Use flexbox to center the content
    justifyContent="center" // Center horizontally
    alignItems="center" // Center vertically
    bg="#010F20" // Set the background color
    color="#FFFFFF" // Set the text color
 >
    <Text
      fontFamily="Raleway"
      lineHeight="1.43"
      fontWeight="regular"
      fontSize="16px" // Adjust based on design
      textAlign="center" // Ensure the text is centered
      maxWidth="100%" // Ensure the text does not overflow the viewport width
    >
      @Hostels2024
    </Text>
 </Box>
);

export default Ffoter;
