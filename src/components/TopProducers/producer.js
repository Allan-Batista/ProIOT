import { VStack, Text, Box, useBreakpointValue } from "@chakra-ui/react";

import {Image} from "components/images";
import  {Producer  as ProducerType} from "Types/producer";


type Props = ProducerType & {
  badge?: boolean,;
};

export const Producer = ({name, image, badge}:Props) => {
    const size = useBreakpointValue({base: "48px", "2x1": "80px"}, "2x1")
  return(
      <VStack>
          <Box position="relative">
              <Image src={image} width={size} height={size} rounded="lg" objectFit="cover"/>
              {badge && (
                  <Box bg="brand.red"
                   position="absolute" 
                   top={-3} right={-3} 
                   routed="full" 
                   width={6} 
                   height={6} 
                   borderWidth={4} 
                   borderColor="black"/>
              )}
          </Box>
          <Text fontSize="sm" fontWeight="medium">{name}</Text>
      </VStack>
  )
};
