import React from 'react';
import {
  Stack,
  Avatar,
  AvatarBadge,
  Text,
  Button,

  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

    const notificationSocket = new WebSocket('ws://' + window.location.host + '/ws/notifications/');

    notificationSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        alert('New notification: ' + data.message);
    };

    notificationSocket.onclose = function(e) {
        console.error('Notification socket closed unexpectedly');
    };

export const Notification = () => (
    <Stack direction="row" justify="center" align="center" spacing="15px" marginLeft="-300px">
    <Stack
      paddingX="14px"
      paddingY="28px"
      direction="row"
      justify="flex-start"
      align="flex-start"
      spacing="10px"
      overflow="hidden"
      borderColor="#414243"
      borderStartWidth="1px"
      borderEndWidth="1px"
      borderTopWidth="1px"
      borderBottomWidth="1px"
      background="#FFFFFF"
      marginBottom="90px"
      marginTop="-90px"
      marginRight="200px"
    >
      <Stack justify="flex-start" align="center" spacing="12px">
        <Avatar src=" " name="TA" size="xs">
          <AvatarBadge boxSize="1.25em" background="green.500" />
        </Avatar>
        <Stack justify="flex-start" align="center" spacing="38px">
          <Text
            fontFamily="Raleway"
            lineHeight="1.56"
            fontWeight="semibold"
            fontSize="18px"
            color="#000000"
          >
            User
          </Text>
          <Stack justify="flex-start" align="flex-start" spacing="24px">
            <Button
             size="lg"
              colorScheme="White"
              fontFamily="Raleway"
              color="#2B6CB0"
              width="312px"
              height="48px"
              maxWidth="100%"
            >
              Notification{' '}
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
              color="black"
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
    <Stack justify="flex-start" align="flex-start" spacing="28px" marginTop="-500px" marginLeft="0px">
      <Text
       fontFamily="Raleway"
        lineHeight="0.75"
        fontWeight="semibold"
        fontSize="32px"
        color="#2B6CB0"
      >
        Notifications
      </Text>
      <Stack justify="flex-start" align="flex-start" spacing="10px" width="345px">
        <Alert>
          <AlertIcon />
          <Stack justify="flex-start" align="flex-start" spacing="0px" flex="1">
            <AlertTitle alignSelf="stretch">Title</AlertTitle>
            <AlertDescription alignSelf="stretch">
              This is a description
            </AlertDescription>
          </Stack>
        </Alert>
        
        <Stack size="sm" width="24px" height="24px" />
      </Stack>
    </Stack>
  </Stack>

);
export default Notification;