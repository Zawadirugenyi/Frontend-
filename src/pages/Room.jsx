import React from 'react';
import { Box, Stack, Image, Text, Input, Button } from '@chakra-ui/react';
import Kryptons from '../components/images/Kryptons.jpeg';
import Bedroom from '../components/images/data_Looks_16.jpeg';
import Sitting_room from '../components/images/istockphoto-1333060261-612x612.jpeg';
import Kitchen from '../components/images/kichen-charles-and-co-design-img~60f1202101c1afb7_4-9787-1-e37a56a.jpeg';
import Bathroom from '../components/images/iStock-601118806-1.webp';

export const Room = () => (
 <Box>
    <Stack
      direction="row"
      justify="flex-start"
      align="flex-start"
      spacing="19px"
      marginBottom="150px"
      marginTop="-120px"
    >
      <Image src={Kryptons} alt="Main Image" width="737px" height="466px" maxWidth="100%" marginLeft="30px" />
      <Stack justify="flex-start" align="flex-start" spacing="16px">
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="19px"
          marginRight="49px"
        >
          <Image src={Bedroom} alt="Sub Image 1" width="305px" height="225px" maxWidth="100%" />
          <Image src={Sitting_room} alt="Sub Image 2" width="305px" height="225px" maxWidth="100%" />
        </Stack>
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="19px"
        >
          <Image src={Kitchen} alt="Sub Image 3" width="305px" height="225px" maxWidth="100%" />
          <Image src={Bathroom} alt="Sub Image 4" width="305px" height="225px" maxWidth="100%" />
        </Stack>
      </Stack>
    </Stack>
    <Stack direction="row" justify="center" align="center" spacing="60px" marginBottom="180px">
      <Stack
        paddingX="27px"
        paddingY="60px"
        justify="flex-start"
        align="flex-start"
        spacing="10px"
        overflow="hidden"
        marginLeft="40px"
        marginTop="-45px"
        borderColor="#05559F"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        background="#FFFFFF"
        marginBottom="-45px"
        minHeight="500px" 
      >
        <Stack justify="flex-start" align="flex-start" spacing="33px">
          <Stack justify="flex-start" align="flex-start" spacing="42px">
            <Text
              fontFamily="Raleway"
              fontWeight="regular"
              fontSize="24px"
              color="#05559F"
             
            >
              Descriptions
            </Text>
            <Text
              fontFamily="Raleway"
              fontWeight="light"
              fontSize="16px"
              color="#000000"
              width="590px"
              height="113px"
              maxWidth="100%"
            >
              we offer WiFi, bed, and water and we are located around Daystar Main
              Campuswe offer WiFi, bed, and water and we are located around
              Daystar Main Campus we offer WiFi, bed, and water and we are located
              around Daystar Main Campuswe offer WiFi, bed, and water and we are
              located around Daystar Main Campus
            </Text>
          </Stack>
          <Stack justify="flex-start" align="flex-start" spacing="36px" marginBottom="-45px">
            <Stack justify="flex-start" align="flex-start" spacing="65px">
              <Text
                fontFamily="Raleway"
                fontWeight="regular"
                fontSize="18px"
                color="#05559F"
              >
                We offer:
              </Text>
              <Stack
                direction="row"
                justify="flex-start"
                align="flex-start"
                spacing="40px"
              >
                <Text
                 fontFamily="Raleway"
                 fontWeight="light"
                 fontSize="16px"
                 color="#000000"
                >
                 WiFi
                </Text>
                <Text
                 fontFamily="Raleway"
                 fontWeight="light"
                 fontSize="16px"
                 color="#000000"
                >
                 Worldrob
                </Text>
                <Text
                 fontFamily="Ralway"
                 fontWeight="light"
                 fontSize="16px"
                 color="#000000"
                >
                 Table
                </Text>
                <Text
                 fontFamily="Raleway"
                 fontWeight="light"
                 fontSize="16px"
                 color="#000000"
                >
                 Chair
                </Text>
                <Text
                 fontFamily="Raleway"
                 fontWeight="light"
                 fontSize="16px"
                 color="#000000"
                >
                 SwimmingPool
                </Text>
                <Text
                 fontFamily="Raleway"
                 fontWeight="light"
                 fontSize="16px"
                 color="#000000"
                >
                 Bed
                </Text>
              </Stack>
            </Stack>
            <Stack
              paddingX="20px"
              paddingY="13px"
              direction="row"
              justify="flex-start"
              align="flex-start"
              spacing="350px"
              background="#ffffff"
            >
              <Text
                fontFamily="Raleway"
                fontWeight="light"
                fontSize="16px"
                color="#05559F"
                marginLeft="-23px"
              >
                Price:
              </Text>
              <Text
                fontFamily="Raleway"
                fontWeight="light"
                fontSize="16px"
                color="#05559F"
                 marginLeft="20px"
              >
                Ksh 15,000
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        paddingX="27px"
        paddingY="60px"
        justify="flex-start"
        align="flex-start"
        spacing="10px"
        overflow="hidden"
        marginLeft="40px"
        marginTop="-45px"
        borderColor="#05559F"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        background="#FFFFFF"
        marginBottom="-45px"
        minHeight="500px" 
      >
        <Stack justify="flex-start" align="flex-start" spacing="48px">
          <Stack justify="flex-start" align="center" spacing="57px">
            <Text
              fontFamily="Raleway"
              fontWeight="regular"
              fontSize="24px"
              color="#05559F"
            >
              Payment Method
            </Text>
            <Stack justify="flex-start" align="flex-start" spacing="30px">
              <Input
                placeholder="Phone Number"
                size="xs"
                width="360px"
                height="43px"
                fontFamily="Raleway"
                maxWidth="100%"
              />
              <Input
                placeholder="ksh 15,000"
                size="xs"
                width="360px"
                height="43px"
                maxWidth="100%"
                fontFamily="Raleway"
              />
              <Input
                placeholder="PIN"
                size="xs"
                width="360px"
                height="43px"
                maxWidth="100%"
                fontFamily="Raleway"
              />
            </Stack>
          </Stack>
          <Button
            size="lg"
            colorScheme="blue"
            width="360px"
            height="48px"
            maxWidth="100%"
            fontFamily="Raleway"
          >
            Confirm Booking
          </Button>
        </Stack>
      </Stack>
    </Stack>

    
 </Box>
);

export default Room;
