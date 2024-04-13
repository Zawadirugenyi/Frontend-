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
  <Box marginTop="-190px" marginLeft="100px" marginBottom="100px">
    <Stack direction="row" justify="center" align="center" spacing="10px" marginLeft="-60px" marginTop="90px">
    
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
      marginRight="20px"
    >
      <Stack justify="flex-start" align="center" spacing="6px" marginRight="80px">
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
        marginRight="50px"
        
      >
        <Stack justify="flex-start" align="flex-start" spacing="14px" marginRight="0px" marginBottom="60px">
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
            height="442px"
            maxWidth="100%"
            objectFit="cover"
          />
        </Stack>
        <Stack
          paddingY="45px"
           paddingX="55px"
          justify="flex-start"
          align="flex-start"
          spacing="32px"
          overflow="hidden"
          background="#E2E8F0" 
          marginRight="0px"
          marginBottom="20px"
        >
          <Stack justify="flex-start" align="flex-start" spacing="6px" >
            <Stack justify="flex-start" align="center" spacing="15px">
              <Stack justify="flex-start" align="center" spacing="10px" >
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
                <Stack justify="flex-start" align="flex-start" spacing="7px">
                  <Stack justify="flex-start" align="flex-start" spacing="7px">
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="100px"
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
                        2022 Jan, 12th
                      </Text>
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="89px"
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
                        2024 May, 09th
                      </Text>
                    </Stack>
                  </Stack>
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
          <Stack justify="flex-start" align="flex-start" spacing="6px">
            <Stack justify="flex-start" align="center" spacing="15px">
              <Stack justify="flex-start" align="center" spacing="10px">
                <Text
                  fontFamily="Raleway"
                  fontWeight="semibold"
                  fontSize="18px"
                  color="#000000"
                  textAlign="end"
                >
                    Check Out Charges
                </Text>
                <span className="unsupported" />
                <Stack justify="flex-start" align="flex-start" spacing="7px">
                  <Stack justify="flex-start" align="flex-start" spacing="7px">
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="100px"
                    >
                      <Text
                        fontFamily="Raleway"
                        fontWeight="semibold"
                        fontSize="12px"
                        color="#000000"
                        textAlign="end"
                      >
                        Painting Fees
                      </Text>
                      <Text
                        fontFamily="Raleway"
                        fontWeight="regular"
                        fontSize="10px"
                        color="#000000"
                        textAlign="end"
                        marginRight="-21px"
                        marginLeft="-21px"
                      >
                        Ksh 3,700
                      </Text>
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="89px"
                    >
                      <Text
                        fontFamily="Raleway"
                        fontWeight="semibold"
                        fontSize="12px"
                        color="#000000"
                        textAlign="end"
                       
                      >
                        Cleaning Fees
                      </Text>
                      <Text
                        fontFamily="Raleway"
                        fontWeight="regular"
                        fontSize="10px"
                        color="#000000"
                        textAlign="end"
                         marginRight="-21px"
                        marginLeft="-14px"
                      
                    
                      >
                       Ksh 300
                      </Text>
                    </Stack>
                  </Stack>
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
                    >
                     Total Charges
                    </Text>
                    <Text
                      fontFamily="Raleway"
                      fontWeight="semibold"
                      fontSize="10px"
                      color="#000000"
                      textAlign="end"
                      marginRight="-11px"
                      marginLeft="2px"
                      
                     
                    >
                      Ksh 4,000
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
         
          <Stack justify="flex-start" align="center" spacing="4px"  textAlign="center">
            <Stack justify="flex-start" align="center" spacing="0px"  textAlign="center">
              <Stack justify="flex-start" align="center" spacing="0px"  textAlign="center">

              </Stack>
              <Stack justify="flex-start" align="center" spacing="0px"  textAlign="center">
                <span className="unsupported" />
                
              </Stack>
            </Stack>
            <Button
              size="lg"
              colorScheme="blue"
              width="306px"
              height="38px"
              maxWidth="80%"
              marginRight="39px"
              marginLeft="-46px"
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
