import React from 'react';
import { Box, Image, Icon, Text, Card, CardHeader, CardBody, CardFooter, Stack, Flex } from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { IoCameraOutline, IoBedOutline } from 'react-icons/io5';
import { MdOutlineBathtub } from 'react-icons/md';
import { BiShareAlt, BiHeart } from 'react-icons/bi';
import Kryptons from '../components/images/Kryptons.jpeg';
import Heri from '../components/images/BPL_Housing.jpeg';
import Waxe from '../components/images/images 5.25.56 AM.jpeg';
import Apartment_R from '../components/images/207302650.jpeg';
import Tsavo from '../components/images/maxresdefault.jpeg';
import OC from '../components/images/481cdc4c-0ad4-4fed-aae4-4db2081e3974-592x444 (1).jpeg';

export const Home = () => (
 <Flex justify="center" wrap="wrap" spacing="20px" align="flex-start" marginTop="-150px">
    
 <Card variant="elevated" width="376px" height="496px" maxWidth="100%">
    <CardHeader>
      <Box position="relative" width="100%" height="273px">
        <Image 
          src={Kryptons} 
          alt="Apartment Image" 
          width="100%"
          height="100%"
          objectFit="cover"
          position="relative"
          zIndex="0"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))"
          zIndex="1"
        />
        <Stack position="absolute" bottom="0" left="0" spacing={2} align="center" zIndex="2">
          <Stack direction="row" align="center">
            <Icon as={GoLocation} color="white" boxSize="20px" />
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="16px" // Adjust based on design
              color="white"
            >
              Daystar Athiriver
            </Text>
          </Stack>
        </Stack>
        <Stack position="absolute" bottom="0" right="0" spacing={2} align="center" zIndex="2">
          <Stack direction="row" align="center">
            <Icon as={IoCameraOutline} color="white" boxSize="20px" />
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="16px" // Adjust based on design
              color="white"
            >
              6
            </Text>
          </Stack>
        </Stack>
      </Box>
    </CardHeader>
    <CardBody>
     
      <Stack direction="row" justify="flex-start" align="flex-start" spacing="118px">
       
      </Stack>
      <Stack justify="flex-start" align="center" spacing="14px">
        <Stack justify="flex-start" align="flex-start" spacing="10px">
          <Text fontFamily="Raleway" fontWeight="medium" fontSize="21px" color="#000000" width="189px" height="25px">
            Kryptons Apartment
          </Text>
          <Stack justify="flex-start" align="flex-start" spacing="11px">
            <Text fontFamily="Raleway" fontWeight="light" fontSize="16px" color="#000000" width="329px" height="84px" maxWidth="100%">
              we offer WiFi, bed, and water and we are located around Daystar Main Campuswe offer WiFi, bed, and water and we are located around Daystar Main Campus
            </Text>
            <Stack direction="row" justify="flex-start" align="flex-start" spacing="38px">
              <Stack direction="row" justify="flex-start" align="flex-end" spacing="11px">
                <Icon as={IoBedOutline} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  1
                </Text>
              </Stack>
              <Stack direction="row" justify="flex-start" align="center" spacing="11px">
                <Icon as={MdOutlineBathtub} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  1
                </Text>
                 <Stack direction="row" justify="flex-start" align="flex-start" spacing="19px">
        <Stack padding="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderStartWidth="1px" borderEndWidth="1px" borderTopWidth="1px" borderBottomWidth="1px" background="#FFFFFF">
          <Icon as={BiShareAlt} />
        </Stack>
        <Stack paddingX="4px" paddingY="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderStartWidth="1px" borderEndWidth="1px" borderTopWidth="1px" borderBottomWidth="1px" background="#FFFFFF">
          <Icon as={BiHeart} />
        </Stack>
      </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </CardBody>
 </Card>

<Card variant="elevated" width="376px" height="496px" maxWidth="100%" marginLeft="100px" marginBottom="180px">
    <CardHeader>
      <Box position="relative" width="100%" height="273px">
        <Image 
          src={Heri} 
          alt="Apartment Image" 
          width="100%"
          height="100%"
          objectFit="cover"
       
        />
         <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))"
          zIndex="1"
        />
        <Stack position="absolute" bottom="0" left="0" spacing={2} align="center" zIndex="2">
          <Stack direction="row" align="center">
            <Icon as={GoLocation} color="white" boxSize="20px" />
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="16px" 
              color="white"
            >
              Daystar Athiriver
            </Text>
          </Stack>
        </Stack>
        <Stack position="absolute" bottom="0" right="0" spacing={2} align="center" zIndex="2">
          <Stack direction="row" align="center">
            <Icon as={IoCameraOutline} color="white" boxSize="20px" />
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="16px" 
              color="white"
            >
              6
            </Text>
          </Stack>
        </Stack>
      </Box>
    </CardHeader>
    <CardBody>
     
      <Stack direction="row" justify="flex-start" align="flex-start" spacing="118px">
       
      </Stack>
      <Stack justify="flex-start" align="center" spacing="14px">
        <Stack justify="flex-start" align="flex-start" spacing="10px">
          <Text fontFamily="Raleway" fontWeight="medium" fontSize="21px" color="#000000" width="189px" height="25px">
            Kryptons Apartment
          </Text>
          <Stack justify="flex-start" align="flex-start" spacing="11px">
            <Text fontFamily="Raleway" fontWeight="light" fontSize="16px" color="#000000" width="329px" height="84px" maxWidth="100%">
              we offer WiFi, bed, and water and we are located around Daystar Main Campuswe offer WiFi, bed, and water and we are located around Daystar Main Campus
            </Text>
            <Stack direction="row" justify="flex-start" align="flex-start" spacing="38px">
              <Stack direction="row" justify="flex-start" align="flex-end" spacing="11px">
                <Icon as={IoBedOutline} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  1
                </Text>
              </Stack>
              <Stack direction="row" justify="flex-start" align="center" spacing="11px">
                <Icon as={MdOutlineBathtub} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  1
                </Text>
                 <Stack direction="row" justify="flex-start" align="flex-start" spacing="19px">
        <Stack padding="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderStartWidth="1px" borderEndWidth="1px" borderTopWidth="1px" borderBottomWidth="1px" background="#FFFFFF">
          <Icon as={BiShareAlt} />
        </Stack>
        <Stack paddingX="4px" paddingY="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderStartWidth="1px" borderEndWidth="1px" borderTopWidth="1px" borderBottomWidth="1px" background="#FFFFFF">
          <Icon as={BiHeart} />
        </Stack>
      </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </CardBody>
 </Card>

 <Card variant="elevated" width="376px" height="496px" maxWidth="100%" marginLeft="100px" marginBottom="180px">
    <CardHeader>
      <Box position="relative" width="100%" height="273px">
        <Image 
          src={OC} 
          alt="Apartment Image" 
          width="100%"
          height="100%"
          objectFit="cover"

        />
         <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))"
          zIndex="1"
        />
         <Stack position="absolute" bottom="0" left="0" spacing={2} align="center" zIndex="2">
          <Stack direction="row" align="center">
            <Icon as={GoLocation} color="white" boxSize="20px" />
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="16px" 
              color="white"
            >
              Daystar Athiriver
            </Text>
          </Stack>
        </Stack>
        <Stack position="absolute" bottom="0" right="0" spacing={2} align="center" zIndex="2">
          <Stack direction="row" align="center">
            <Icon as={IoCameraOutline} color="white" boxSize="20px" />
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="16px"
              color="white"
            >
              6
            </Text>
          </Stack>
        </Stack>
      </Box>
    </CardHeader>
    <CardBody>
     
      <Stack direction="row" justify="flex-start" align="flex-start" spacing="118px">
       
      </Stack>
      <Stack justify="flex-start" align="center" spacing="14px">
        <Stack justify="flex-start" align="flex-start" spacing="10px">
          <Text fontFamily="Raleway" fontWeight="medium" fontSize="21px" color="#000000" width="189px" height="25px">
            Kryptons Apartment
          </Text>
          <Stack justify="flex-start" align="flex-start" spacing="11px">
            <Text fontFamily="Raleway" fontWeight="light" fontSize="16px" color="#000000" width="329px" height="84px" maxWidth="100%">
              we offer WiFi, bed, and water and we are located around Daystar Main Campuswe offer WiFi, bed, and water and we are located around Daystar Main Campus
            </Text>
            <Stack direction="row" justify="flex-start" align="flex-start" spacing="38px">
              <Stack direction="row" justify="flex-start" align="flex-end" spacing="11px">
                <Icon as={IoBedOutline} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  1
                </Text>
              </Stack>
              <Stack direction="row" justify="flex-start" align="center" spacing="11px">
                <Icon as={MdOutlineBathtub} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  1
                </Text>
                 <Stack direction="row" justify="flex-start" align="flex-start" spacing="19px">
        <Stack padding="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderStartWidth="1px" borderEndWidth="1px" borderTopWidth="1px" borderBottomWidth="1px" background="#FFFFFF">
          <Icon as={BiShareAlt} />
        </Stack>
        <Stack paddingX="4px" paddingY="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderStartWidth="1px" borderEndWidth="1px" borderTopWidth="1px" borderBottomWidth="1px" background="#FFFFFF">
          <Icon as={BiHeart} />
        </Stack>
      </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </CardBody>
 </Card>

 <Card variant="elevated" width="376px" height="496px" maxWidth="100%" marginTop="-150px">
    <CardHeader>
      <Box position="relative" width="100%" height="273px">
        <Image 
          src={Waxe} 
          alt="Apartment Image" 
          width="100%"
          height="100%"
          objectFit="cover"
       
        />
         <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))"
          zIndex="1"
        />
        <Stack position="absolute" bottom="0" left="0" spacing={2} align="center" zIndex="2">
          <Stack direction="row" align="center">
            <Icon as={GoLocation} color="white" boxSize="20px" />
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="16px" 
              color="white"
            >
              Daystar Athiriver
            </Text>
          </Stack>
        </Stack>
        <Stack position="absolute" bottom="0" right="0" spacing={2} align="center" zIndex="2">
          <Stack direction="row" align="center">
            <Icon as={IoCameraOutline} color="white" boxSize="20px" />
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="16px" 
              color="white"
            >
              6
            </Text>
          </Stack>
        </Stack>
      </Box>
    </CardHeader>
    <CardBody>
     
      <Stack direction="row" justify="flex-start" align="flex-start" spacing="118px">
       
      </Stack>
      <Stack justify="flex-start" align="center" spacing="14px">
        <Stack justify="flex-start" align="flex-start" spacing="10px">
          <Text fontFamily="Raleway" fontWeight="medium" fontSize="21px" color="#000000" width="189px" height="25px">
            Kryptons Apartment
          </Text>
          <Stack justify="flex-start" align="flex-start" spacing="11px">
            <Text fontFamily="Raleway" fontWeight="light" fontSize="16px" color="#000000" width="329px" height="84px" maxWidth="100%">
              we offer WiFi, bed, and water and we are located around Daystar Main Campuswe offer WiFi, bed, and water and we are located around Daystar Main Campus
            </Text>
            <Stack direction="row" justify="flex-start" align="flex-start" spacing="38px">
              <Stack direction="row" justify="flex-start" align="flex-end" spacing="11px">
                <Icon as={IoBedOutline} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  1
                </Text>
              </Stack>
              <Stack direction="row" justify="flex-start" align="center" spacing="11px">
                <Icon as={MdOutlineBathtub} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  1
                </Text>
                 <Stack direction="row" justify="flex-start" align="flex-start" spacing="19px">
        <Stack padding="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderStartWidth="1px" borderEndWidth="1px" borderTopWidth="1px" borderBottomWidth="1px" background="#FFFFFF">
          <Icon as={BiShareAlt} />
        </Stack>
        <Stack paddingX="4px" paddingY="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderStartWidth="1px" borderEndWidth="1px" borderTopWidth="1px" borderBottomWidth="1px" background="#FFFFFF">
          <Icon as={BiHeart} />
        </Stack>
      </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </CardBody>
 </Card>
 
 <Card variant="elevated" width="376px" height="496px" maxWidth="100%" marginLeft="100px" marginTop="-150px">
    <CardHeader>
      <Box position="relative" width="100%" height="273px">
        <Image 
          src={Tsavo} 
          alt="Apartment Image" 
          width="100%"
          height="100%"
          objectFit="cover"
       
        />
         <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))"
          zIndex="1"
        />
         <Stack position="absolute" bottom="0" left="0" spacing={2} align="center" zIndex="2">
          <Stack direction="row" align="center">
            <Icon as={GoLocation} color="white" boxSize="20px" />
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="16px" 
              color="white"
            >
              Daystar Athiriver
            </Text>
          </Stack>
        </Stack>
        <Stack position="absolute" bottom="0" right="0" spacing={2} align="center" zIndex="2">
          <Stack direction="row" align="center">
            <Icon as={IoCameraOutline} color="white" boxSize="20px" />
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="16px" 
              color="white"
            >
              6
            </Text>
          </Stack>
        </Stack>
      </Box>
    </CardHeader>
    <CardBody>
     
      <Stack direction="row" justify="flex-start" align="flex-start" spacing="118px">
       
      </Stack>
      <Stack justify="flex-start" align="center" spacing="14px">
        <Stack justify="flex-start" align="flex-start" spacing="10px">
          <Text fontFamily="Raleway" fontWeight="medium" fontSize="21px" color="#000000" width="189px" height="25px">
            Kryptons Apartment
          </Text>
          <Stack justify="flex-start" align="flex-start" spacing="11px">
            <Text fontFamily="Raleway" fontWeight="light" fontSize="16px" color="#000000" width="329px" height="84px" maxWidth="100%">
              we offer WiFi, bed, and water and we are located around Daystar Main Campuswe offer WiFi, bed, and water and we are located around Daystar Main Campus
            </Text>
            <Stack direction="row" justify="flex-start" align="flex-start" spacing="38px">
              <Stack direction="row" justify="flex-start" align="flex-end" spacing="11px">
                <Icon as={IoBedOutline} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  1
                </Text>
              </Stack>
              <Stack direction="row" justify="flex-start" align="center" spacing="11px">
                <Icon as={MdOutlineBathtub} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  1
                </Text>
                 <Stack direction="row" justify="flex-start" align="flex-start" spacing="19px">
        <Stack padding="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderStartWidth="1px" borderEndWidth="1px" borderTopWidth="1px" borderBottomWidth="1px" background="#FFFFFF">
          <Icon as={BiShareAlt} />
        </Stack>
        <Stack paddingX="4px" paddingY="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderStartWidth="1px" borderEndWidth="1px" borderTopWidth="1px" borderBottomWidth="1px" background="#FFFFFF">
          <Icon as={BiHeart} />
        </Stack>
      </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </CardBody>
 </Card>
 <Card variant="elevated" width="376px" height="496px" maxWidth="100%" marginLeft="100px" marginTop="-150px" marginBottom="90px">
    <CardHeader>
      <Box position="relative" width="100%" height="273px">
        <Image 
          src={Apartment_R} 
          alt="Apartment Image" 
          width="100%"
          height="100%"
          objectFit="cover"
      
        />
         <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))"
          zIndex="1"
        />
         <Stack position="absolute" bottom="0" left="0" spacing={2} align="center" zIndex="2">
          <Stack direction="row" align="center">
            <Icon as={GoLocation} color="white" boxSize="20px" />
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="16px"
              color="white"
            >
              Daystar Athiriver
            </Text>
          </Stack>
        </Stack>
        <Stack position="absolute" bottom="0" right="0" spacing={2} align="center" zIndex="2" marginLeft="7px">
          <Stack direction="row" align="center">
            <Icon as={IoCameraOutline} color="white" boxSize="20px" />
            <Text
              fontFamily="Raleway"
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="16px" 
              color="white"
            >
              6
            </Text>
          </Stack>
        </Stack>
      </Box>
    </CardHeader>
    <CardBody>
     
      <Stack direction="row" justify="flex-start" align="flex-start" spacing="git 118px">
       
      </Stack>
      <Stack justify="flex-start" align="center" spacing="14px">
        <Stack justify="flex-start" align="flex-start" spacing="10px">
          <Text fontFamily="Raleway" fontWeight="medium" fontSize="21px" color="#000000" width="189px" height="25px">
            Kryptons Apartment
          </Text>
          <Stack justify="flex-start" align="flex-start" spacing="11px">
            <Text fontFamily="Raleway" fontWeight="light" fontSize="16px" color="#000000" width="329px" height="84px" maxWidth="100%">
              we offer WiFi, bed, and water and we are located around Daystar Main Campuswe offer WiFi, bed, and water and we are located around Daystar Main Campus
            </Text>
            <Stack direction="row" justify="flex-start" align="flex-start" spacing="38px">
              <Stack direction="row" justify="flex-start" align="flex-end" spacing="11px">
                <Icon as={IoBedOutline} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  1
                </Text>
              </Stack>
              <Stack direction="row" justify="flex-start" align="center" spacing="11px">
                <Icon as={MdOutlineBathtub} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  1
                </Text>
                 <Stack direction="row" justify="flex-start" align="flex-start" spacing="19px">
        <Stack padding="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderStartWidth="1px" borderEndWidth="1px" borderTopWidth="1px" borderBottomWidth="1px" background="#FFFFFF">
          <Icon as={BiShareAlt} />
        </Stack>
        <Stack paddingX="4px" paddingY="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderStartWidth="1px" borderEndWidth="1px" borderTopWidth="1px" borderBottomWidth="1px" background="#FFFFFF">
          <Icon as={BiHeart} />
        </Stack>
      </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </CardBody>
 </Card>

</Flex>
 
);

export default Home;
