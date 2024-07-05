import React from 'react';
import { Box, Image, Icon, Text, Card, CardHeader, CardBody, Stack, Flex } from '@chakra-ui/react';
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


const ApartmentCard = ({ src, location, title, description, beds, baths, cameras }) => (
  <Card variant="elevated" width="376px" height="496px" maxWidth="100%" m="20px">
    <CardHeader>
      <Box position="relative" width="100%" height="273px">
        <Image 
          src={src} 
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
              {location}
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
              {cameras}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </CardHeader>
    <CardBody>
      <Stack justify="flex-start" align="center" spacing="14px">
        <Stack justify="flex-start" align="flex-start" spacing="10px">
          <Text fontFamily="Raleway" fontWeight="medium" fontSize="21px" color="#000000">
            {title}
          </Text>
          <Stack justify="flex-start" align="flex-start" spacing="11px">
            <Text fontFamily="Raleway" fontWeight="light" fontSize="16px" color="#000000" maxWidth="100%">
              {description}
            </Text>
            <Stack direction="row" justify="flex-start" align="flex-start" spacing="38px">
              <Stack direction="row" justify="flex-start" align="flex-end" spacing="11px">
                <Icon as={IoBedOutline} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  {beds}
                </Text>
              </Stack>
              <Stack direction="row" justify="flex-start" align="center" spacing="11px">
                <Icon as={MdOutlineBathtub} />
                <Text fontFamily="Raleway" fontWeight="medium" fontSize="18px" color="#444444">
                  {baths}
                </Text>
                <Stack direction="row" justify="flex-start" align="flex-start" spacing="19px">
                  <Stack padding="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderWidth="1px" background="#FFFFFF">
                    <Icon as={BiShareAlt} />
                  </Stack>
                  <Stack paddingX="4px" paddingY="3px" direction="row" justify="flex-start" align="flex-start" spacing="10px" borderColor="#444444" borderWidth="1px" background="#FFFFFF">
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
);

export const Home = () => (
  <Flex justify="center" wrap="wrap" spacing="20px" align="flex-start" mt="-150px">
    <ApartmentCard 
      src={Kryptons} 
      location="Daystar Athiriver" 
      title="Kryptons Apartment" 
      description="We offer WiFi, bed, and water and we are located around Daystar Main Campus."
      beds="1"
      baths="1"
      cameras="6"
    />
    <ApartmentCard 
      src={Heri} 
      location="Daystar Athiriver" 
      title="Heri Apartments" 
      description="Located near Daystar Main Campus with amenities including WiFi, bed, and water."
      beds="2"
      baths="1"
      cameras="4"
    />
    <ApartmentCard 
      src={OC} 
      location="Daystar Athiriver" 
      title="OC Apartments" 
      description="Comfortable living space with WiFi and water available, close to Daystar Main Campus."
      beds="3"
      baths="2"
      cameras="5"
    />
    <ApartmentCard 
      src={Waxe} 
      location="Daystar Athiriver" 
      title="Waxe Apartments" 
      description="Affordable and comfortable apartments offering WiFi, bed, and water."
      beds="1"
      baths="1"
      cameras="8"
    />
    <ApartmentCard 
      src={Tsavo} 
      location="Daystar Athiriver" 
      title="Tsavo Apartments" 
      description="Convenient location with all basic amenities including WiFi, bed, and water."
      beds="2"
      baths="1"
      cameras="3"
    />
    <ApartmentCard 
      src={Apartment_R} 
      location="Daystar Athiriver" 
      title="Apartment R" 
      description="Modern living spaces with WiFi and water available, near Daystar Main Campus."
      beds="2"
      baths="1"
      cameras="6"
    />
  </Flex>
);

export default Home;
