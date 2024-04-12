import React from 'react';
import { Stack, Avatar, AvatarBadge, Text, Button, Textarea } from '@chakra-ui/react';

export const RoomChanging = () => (
 <Stack direction="row" justify="center" align="center" spacing="10px" marginLeft="-200px">
    
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
      marginRight="40px"
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
      paddingX="84px"
      paddingY="28px"
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
      marginTop="-150px"
      marginRight="-210px"
    >
      <Stack justify="flex-start" align="flex-end" spacing="51px" marginTop="90px">
        <Stack justify="flex-start" align="flex-start" spacing="35px">
          <Stack justify="flex-start" align="center" spacing="35px">
            <Text
         
              fontWeight="semibold"
              
              color="#2B6CB0"
               fontFamily="Raleway"
        lineHeight="0.75"
      
        fontSize="32px"
       
            >
              New requisition
            </Text>
         
            <Textarea
              placeholder="Reason of Change your Room"
              isDisabled={false}
              width="600px"
              height="160px"
              maxWidth="100%"
              borderColor="gray.200"
              borderStartWidth="1px"
              borderEndWidth="1px"
              borderTopWidth="1px"
              borderBottomWidth="1px"
            />
          </Stack>
          <Button
            size="lg"
            colorScheme="blue"
            width="600px"
            height="48px"
            maxWidth="100%"
          >
            Submit Requisition
          </Button>
        </Stack>
        <Button size="lg" colorScheme="red">
          Close
        </Button>
      </Stack>
    </Stack>
 </Stack>
);

export default RoomChanging;
