import React, { useState } from 'react';
import { Stack, Text, Input, Button, Center } from '@chakra-ui/react';
import axios from 'axios';

export const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/users/signup/', {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        email: email,
        password: password,
        confirm_password: confirmPassword
      });
      setMessage('Registration successful!');
      setMessageColor('green');
      // Clear form fields
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessages = Object.values(error.response.data.message).flat();
        setMessage('Registration failed: ' + errorMessages.join(', '));
      } else if (error.request) {
        setMessage('Registration failed: Server did not respond');
      } else {
        setMessage('Registration failed: ' + error.message);
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
          <Stack justify="center" align="center" spacing="24px" marginLeft="-76px">
            <Text
              fontFamily="Raleway"
              lineHeight="1.56"
              fontWeight="semibold"
              fontSize="36px"
              color="#05559F"
              width="469px"
              maxWidth="100%"
            >
              SignUp to our Hostel
            </Text>
            <Input
              fontFamily="Raleway"
              placeholder="First Name"
              size="xs"
              width="469px"    
              fontSize="20px"
              height="60px"
              maxWidth="100%"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              fontFamily="Raleway"
              placeholder="Last Name"
              size="xs"
              width="469px"
              height="60px"
              maxWidth="100%"
              fontSize="20px"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              fontFamily="Raleway"
              placeholder="Email"
              size="xs"
              width="469px"
              height="60px"
              fontSize="20px"
              maxWidth="100%"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              fontFamily="Raleway"
              placeholder="Phone Number"
              size="xs"
              width="469px"     
              fontSize="20px"
              height="60px"
              maxWidth="100%"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              fontFamily="Raleway"
              placeholder="Password"
              size="xs"      
              fontSize="20px"
              width="469px"
              height="60px"
              maxWidth="100%"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              fontFamily="Raleway"
              placeholder="Confirm Password"
              size="xs"
              width="469px"
              height="60px"
              fontSize="20px"
              maxWidth="100%"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              fontFamily="Raleway"
              size="lg"
              colorScheme="blue"
              width="469px"
              height="60px"
              maxWidth="100%"
              onClick={handleSignup}
            >
              Signup
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

export default Signup;
