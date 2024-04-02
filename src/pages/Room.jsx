import React from 'react';
import { Box, Stack, Image } from '@chakra-ui/react';
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
      {/* Add marginLeft to the first Image */}
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
 </Box>
);

export default Room;
