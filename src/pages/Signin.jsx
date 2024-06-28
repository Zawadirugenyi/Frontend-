import React, { useState, useEffect } from 'react';
import { Stack, Text, Input, Button, Center } from '@chakra-ui/react';
import axios from 'axios';

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSignin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/users/login/', {
        email: email,
        password: password,
      });
      setMessage('Login successful!');
      setMessageColor('green');
      // Clear form fields
      setEmail('');
      setPassword('');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessages = Object.values(error.response.data.message).flat();
        setMessage('Login failed: ' + errorMessages.join(', '));
      } else if (error.request) {
        setMessage('Login failed: Server did not respond');
      } else {
        setMessage('Login failed: ' + error.message);
      }
      setMessageColor('red');
    }
  };

  return (
    <Center h="100vh" w="100vw" paddingTop="20%" paddingBottom="20%" marginTop="-15%">
      <Stack direction="row" justify="center" align="center" spacing="55px">
        <Stack direction="row" justify="flex-start" align="center" spacing="220px">
          <Stack
            paddingX="90px"
            paddingY="294px"
            marginLeft="56px"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
            overflow="hidden"
            background="#2B6CB0"
          >
            <Stack justify="flex-start" align="center" spacing="55px">
              <Text
                fontFamily="Raleway"
                lineHeight="1.56"
                fontWeight="semibold"
                fontSize="18px"
                color="#FFFFFF"
              >
                Student hostels
              </Text>
              <Text
                fontFamily="Raleway"
                lineHeight="1.56"
                fontWeight="semibold"
                fontSize="18px"
                color="#FFFFFF"
                width="469px"
                maxWidth="100%"
              >
                Welcome to this stunning cottage-like property, nestled on 1.6 acres of mature{' '}
              </Text>
            </Stack>
          </Stack>
          <Stack justify="center" align="center" spacing="47px" marginLeft="-76px">
            <Text
              fontFamily="Raleway"
              lineHeight="1.56"
              fontWeight="semibold"
              fontSize="36px"
              color="#05559F"
              width="469px"
              maxWidth="100%"
            >
              Login to your Account
            </Text>
            <Input
              fontFamily="Raleway"
              placeholder="Email"
              size="xs"
              width="469px"
              fontSize="20px"
              height="60px"
              maxWidth="100%"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              fontFamily="Raleway"
              placeholder="Password"
              size="xs"
              width="469px"
              fontSize="20px"
              height="60px"
              maxWidth="100%"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fontFamily="Raleway"
              size="lg"
              colorScheme="blue"
              width="469px"
              height="60px"
              maxWidth="100%"
              onClick={handleSignin}
            >
              Signin
            </Button>
            {message && (
              <Text color={messageColor} mt="4">
                {message}
              </Text>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Signin;
