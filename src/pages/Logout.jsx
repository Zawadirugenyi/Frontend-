import React from 'react'
import About_photo from '../components/images/7-bedroom-design-tips-for-better-sleep-313465f878194889bed5be6cfb5625d6.jpeg';
import {
  Stack,
  Avatar,
  AvatarBadge,
  Text,
  Button,
  Image,
  Box,
  Center,
} from '@chakra-ui/react'

export const Logout= () => (
  <Stack direction="row" justify="flex-start" align="flex-start" spacing="20px" marginLeft="50px" marginBottom="-190px" marginTop="-120px" >
    <Stack
      paddingX="14px"
      paddingY="18px"
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
      marginBottom="120px"
      marginTop="0px"
      marginRight="100px"
    >
      <Stack justify="flex-start" align="center" spacing="6px" marginRight="120px" marginLeft="-0px" >
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
              colorScheme="White"
              fontFamily="Raleway"
              color="black"
              width="312px"
              height="48px"
              maxWidth="100%"
            >
              Notification
            </Button>
            <Button
              size="lg"
              colorScheme="White"
              fontFamily="Raleway"
              color="black"
              width="312px"
              height="48px"
              maxWidth="100%"
            >
              Change_Room
            </Button>
            <Button
              size="lg"
              fontFamily="Raleway"
              colorScheme="White"
              color="black"
              width="312px"
              height="48px"
              maxWidth="100%"
            >
              My Account
            </Button>
            <Button
              size="lg"
              colorScheme="White"
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
              colorScheme="White"
              fontFamily="Raleway"
              color="#2B6CB0"
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
    <Box position="relative" width="100%" height="600px" marginBottom="120px"> {}
      <Image
        src={About_photo}
        alt="INSERT_ALT"
        width="90%"
        height="70%"
        objectFit="cover"
      />
      <Stack
        position="absolute" // Make the stack position absolute
        bottom="0" // Position it at the bottom of the container
        left="0" // Align it to the left
        paddingX="59px"
        paddingY="8px"
        justify="flex-start"
        align="flex-start"
        spacing="10px"
        overflow="hidden"
        height="112px"
        background="#FFFFFF"
        marginBottom="300px"
        marginLeft="50px"
      >
        <Stack justify="flex-start" align="center" spacing="23px" marginBottom="200px" marginRight="120px" marginLeft="20">
          <Text
            fontFamily="Raleway"
            fontWeight="regular"
            fontSize="16px"
            color="#000000"
            textAlign="end"
          >
            Are you sure you want to Logout?
          </Text>
          <Stack
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="277px"
          >
            <Button size="lg" colorScheme="blue">
              Yes
            </Button>
            <Button size="lg" colorScheme="red">
              No
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
 </Stack>
);
export default Logout;