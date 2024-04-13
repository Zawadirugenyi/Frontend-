import React from 'react';
import { Stack, Avatar, AvatarBadge, Text, Button, Box } from '@chakra-ui/react'


export const Account = () => (
  <Stack direction="row" justify="flex-start" align="flex-start" spacing="60px" marginRight="-290px" marginLeft="90px"  marginBottom="-50px" marginTop="-120px"> 
    <Stack
      paddingX="14px"
      paddingY="8px"
      direction="row"
      justify="flex-start"
      align="flex-start"
      spacing="2px"
      overflow="hidden"
      borderColor="#414243"
      borderStartWidth="1px"
      borderEndWidth="1px"
      borderTopWidth="1px"
      borderBottomWidth="1px"
      background="#FFFFFF"
      marginBottom="90px"
      marginTop="0px"
      marginRight="-20px"
    >
      <Stack justify="flex-start" align="center" spacing="18px">
        <Avatar src=" " name="TA" size="xs">
          <AvatarBadge boxSize="1.25em" background="green.500" />
        </Avatar>
        <Stack justify="flex-start" align="center" spacing="18px">
          <Text
            fontFamily="Raleway"
            lineHeight="1.56"
            fontWeight="semibold"
            fontSize="18px"
            color="#000000"
          >
            User
          </Text>
          <Stack justify="flex-start" align="flex-start" spacing="14px">
            <Button
              size="lg"
              colorScheme="white"
              color="black"
              width="312px"
              height="48px"
              fontFamily="Raleway"
              maxWidth="100%"
            >
              Notification{' '}
            </Button>
            <Button
              size="lg"
              colorScheme="white"
              color="black"
              fontFamily="Raleway"
              width="312px"
              height="48px"
              maxWidth="100%"
            >
              Change_Room
            </Button>
            <Button
              size="lg"
              colorScheme="white"
              color="#2B6CB0"
              fontFamily="Raleway"
              width="312px"
              height="48px"
              maxWidth="100%"
            >
              My Account
            </Button>
            <Button
              size="lg"
              colorScheme="white"
              color="black"
              fontFamily="Raleway"
              width="312px"
              height="48px"
              maxWidth="100%"
            >
              CheckOut
            </Button>
            <Button
              size="lg"
              colorScheme="white"
              color="black"
              fontFamily="Raleway"
              width="312px"
              height="48px"
              maxWidth="100%"
            >
              LogOut
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Stack justify="flex-start" align="flex-start" spacing="90px">
      <Stack
        paddingX="68px"
        paddingY="32px"
        justify="flex-start"
        align="flex-start"
        spacing="10px"
        overflow="hidden"
        width="879px"
        maxWidth="100%"
        background="#FFFFFF"
        borderColor="#414243"
        direction="row"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        
      >
        <Stack justify="flex-start" align="flex-start" spacing="18px">
          <Text
             fontFamily="Raleway"
            lineHeight="1.17"
            fontWeight="semibold"
            fontSize="24px"
            color="#2B6CB0"
          >
            Personal details
          </Text>
          <Stack justify="flex-start" align="flex-start" spacing="12px">
            <Text
              fontFamily="Raleway"
              lineHeight="1.17"
              fontWeight="semibold"
              fontSize="18px"
              color="#000000"
            >
              Zawadi Rugenyi
            </Text>
            <Text
              fontFamily="Raleway"
              lineHeight="1.56"
              fontWeight="regular"
              fontSize="16px"
              color="#000000"
            >
              zawadirugenyi@gmail.com
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        paddingX="68px"
        paddingY="15px"
        justify="flex-start"
        align="flex-start"
        spacing="10px"
        overflow="hidden"
        background="#FFFFFF"
        borderColor="#414243"
     
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        
        marginBottom="100px"
        marginTop="10px"
        marginRight="20px"
        
      >
        <Stack justify="flex-start" align="flex-start" spacing="25px">
          <Text
             fontFamily="Raleway"
            lineHeight="1.17"
            fontWeight="semibold"
            fontSize="24px"
            color="#2B6CB0"
          >
            Room details
          </Text>
          <Stack
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="112px"
            width="743px"
            maxWidth="100%"
          >
            <Text
               fontFamily="Raleway"
              lineHeight="1.56"
               fontWeight="regular"
              fontSize="14px"
              color="#000000"
              width="292px"
              maxWidth="100%"
            >
                 Hostel Name:
                <Box as="span" display="block"  fontWeight="regular">
                    Kryptons
                </Box>
            </Text>
            <Text
               fontFamily="Raleway"
              lineHeight="1.56"
               fontWeight="regular"
              fontSize="14px"
              color="#000000"
              width="306px"
              maxWidth="100%"
            >
              KPLC Account:
                <Box as="span" display="block"  fontWeight="regular">
                    37123498762
                </Box>
            </Text>
            <Text
               fontFamily="Raleway"
              lineHeight="1.56"
              fontWeight="regular"
              fontSize="14px"
              color="#000000"
              width="292px"
              maxWidth="100%"
            >
             Room Number:
                <Box as="span" display="block" fontWeight="regular">
                    320
                </Box>
            </Text>
           
                <Text
                fontFamily="Raleway"
                lineHeight="1.56"
                 fontWeight="regular"
                fontSize="14px"
                color="#000000"
                width="339px"
                maxWidth="100%"
                >
                Check In:
                <Box as="span" display="block"  fontWeight="regular">
                    2024 May, 09th
                </Box>
                </Text>
        
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);
export default Account;
