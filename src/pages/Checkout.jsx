import React from 'react';
import About_photo from '../components/images/7-bedroom-design-tips-for-better-sleep-313465f878194889bed5be6cfb5625d6.jpeg';
import {
  Box,
  Stack,
  Avatar,
  AvatarBadge,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'

export const Checkout = () => (
  <Box>
    <Stack direction="row" justify="center" align="center" spacing="10px" marginLeft="-100px">
    
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
      marginBottom="90px"
      marginTop="-170px"
      marginRight="20px"
    >
      <Stack justify="flex-start" align="center" spacing="12px"   marginRight="120px">
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
              color="#2B6CB0"
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
      <Stack
        paddingX="60px"
        paddingY="16px"
        direction="row"
        justify="flex-start"
        align="center"
        spacing="60px"
        overflow="hidden"
        borderColor="#444444"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        background="#FFFFFF"
      >
        <Stack justify="flex-start" align="flex-start" spacing="14px">
          <Text
            fontFamily="Raleway"
            fontWeight="semibold"
            fontSize="24px"
            color="#2B6CB0"
            textAlign="end"
          >
            CheckOut
          </Text>
          <Image
              src={About_photo } 
            alt="INSERT_ALT"
            width="100%"
            height="542px"
            maxWidth="100%"
            objectFit="cover"
          />
        </Stack>
        <Stack
          paddingY="25px"
           paddingX="45px"
          justify="flex-start"
          align="flex-start"
          spacing="32px"
          overflow="hidden"
          background="#E2E8F0"
        >
          <Stack justify="flex-start" align="flex-start" spacing="16px">
            <Stack justify="flex-start" align="center" spacing="45px">
              <Stack justify="flex-start" align="center" spacing="31px">
                <Text
                  fontFamily="Raleway"
                  fontWeight="semibold"
                  fontSize="18px"
                  color="#000000"
                  textAlign="end"
                >
                  Your stay in our Hostel
                </Text>
                <span className="unsupported" />
                <Stack justify="flex-start" align="flex-start" spacing="14px">
                  <Stack justify="flex-start" align="flex-start" spacing="14px">
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="110px"
                    >
                      <Text
                        fontFamily="Raleway"
                        fontWeight="semibold"
                        fontSize="12px"
                        color="#000000"
                        textAlign="end"
                      >
                        Check In
                      </Text>
                      <Text
                        fontFamily="Raleway"
                        fontWeight="regular"
                        fontSize="10px"
                        color="#000000"
                        textAlign="end"
                      >
                        2o22 Jan, 12th
                      </Text>
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="96px"
                    >
                      <Text
                        fontFamily="Raleway"
                        fontWeight="semibold"
                        fontSize="12px"
                        color="#000000"
                        textAlign="end"
                      >
                        Check Out
                      </Text>
                      <Text
                        fontFamily="Raleway"
                        fontWeight="regular"
                        fontSize="10px"
                        color="#000000"
                        textAlign="end"
                      >
                        2o24 May, 09th
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack
                    direction="row"
                    justify="flex-start"
                    align="flex-start"
                    spacing="66px"
                  >
                    <Text
                      fontFamily="Raleway"
                      fontWeight="semibold"
                      fontSize="12px"
                      color="#000000"
                      textAlign="end"
                    >
                      Room Number{' '}
                    </Text>
                    <Text
                      fontFamily="Raleway"
                      fontWeight="regular"
                      fontSize="10px"
                      color="#000000"
                      textAlign="end"
                       marginRight="-49px"
                    >
                      320
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack justify="flex-start" align="flex-start" spacing="16px" marginLeft="56px">
            <Text
              fontFamily="Raleway"
              fontWeight="semibold"
              fontSize="18px"
              color="#000000"
              textAlign="end"
            >
              Check Out Charges
            </Text>
          </Stack>
          <Stack justify="flex-start" align="center" spacing="44px"  textAlign="center">
            <Stack justify="flex-start" align="center" spacing="20px"  textAlign="center">
              <Stack justify="flex-start" align="center" spacing="20px"  textAlign="center">
                <Stack
                  direction="row"
                  justify="flex-start"
                  align="flex-start"
                  spacing="69px"
                >
                  <Text
                    fontFamily="Raleway"
                    fontWeight="semibold"
                    fontSize="12px"
                    color="#000000"
                    textAlign="end"
                    marginRight="49px"
                  >
                    Check Out Charges
                  </Text>
                  <Text
                    fontFamily="Raleway"
                    fontWeight="regular"
                    fontSize="10px"
                    color="#000000"
                    textAlign="end"
                    marginRight="44px"
                  >
                    Ksh, 3700
                  </Text>
                </Stack>
                <Stack
                  direction="row"
                  justify="flex-start"
                  align="flex-start"
                  spacing="109px"
                 marginRight="49px"
                >
                  <Text
                    fontFamily="Raleway"
                    fontWeight="semibold"
                    fontSize="12px"
                    color="#000000"
                    textAlign="end"
                     arginRight="49px"
                  >
                    Cleaning fees
                  </Text>
                  <Text
                    fontFamily="Raleway"
                    fontWeight="regular"
                    fontSize="10px"
                    color="#000000"
                    textAlign="end"
                     marginRight="44px"
                  >
                    Ksh, 300
                  </Text>
                </Stack>
              </Stack>
              <Stack justify="flex-start" align="center" spacing="22px"  textAlign="center">
                <span className="unsupported" />
                <Stack
                  direction="row"
                  justify="flex-start"
                  align="flex-start"
                  spacing="85px"
                  justifyContent="center"
                  textAlign="center"
                >
                  <Text
                    fontFamily="Raleway"
                    fontWeight="semibold"
                    fontSize="18px"
                    color="#000000"
                    textAlign="end"
                  >
                    Total Charges
                  </Text>
                  <Text
                    fontFamily="Raleway"
                    fontWeight="regular"
                    fontSize="16px"
                    color="#000000"
                    textAlign="end"
                  >
                    Ksh, 4,000
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Button
              size="lg"
              colorScheme="blue"
              width="306px"
              height="48px"
              maxWidth="100%"
            >
              Checkout
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Box>
);
export default Checkout;
