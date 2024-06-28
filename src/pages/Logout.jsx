import React, { useState } from 'react';
import {
  Stack,
  Avatar,
  AvatarBadge,
  Text,
  Button,
  Image,
  Box,
  Center,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import About_photo from '../components/images/7-bedroom-design-tips-for-better-sleep-313465f878194889bed5be6cfb5625d6.jpeg';

export const Logout = () => {
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/users/logout/');
      setMessage('Logout successful!');
      setMessageColor('green');
      setTimeout(() => {
        navigate('/login'); // Redirect to login page after logout
      }, 2000);
    } catch (error) {
      setMessage('Logout failed. Please try again.');
      setMessageColor('red');
    }
  };

  return (
    <Stack direction="row" justify="flex-start" align="flex-start" spacing="20px" marginLeft="50px" marginBottom="-190px" marginTop="-120px">
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
        <Stack justify="flex-start" align="center" spacing="6px" marginRight="120px" marginLeft="-0px">
          <Avatar src="" name="TA" size="xs">
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
                onClick={handleLogout}
              >
                LogOut
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Box position="relative" width="100%" height="600px" marginBottom="120px">
        <Image
          src={About_photo}
          alt="INSERT_ALT"
          width="90%"
          height="70%"
          objectFit="cover"
        />
        <Stack
          position="absolute"
          bottom="0"
          left="0"
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
            <Stack direction="row" justify="flex-start" align="flex-start" spacing="277px">
              <Button size="lg" colorScheme="blue" onClick={handleLogout}>
                Yes
              </Button>
              <Button size="lg" colorScheme="red">
                No
              </Button>
            </Stack>
            {message && (
              <Text color={messageColor} mt="4">
                {message}
              </Text>
            )}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Logout;
