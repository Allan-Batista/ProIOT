import {
  HStack,
  VStack,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";

import { genres } from "./genres-data";
import { Image } from "../Image";

export const GenresCarousel = () => {

  const imageSize = useBreakpointValue({ base: "80px", md: "96px", "2x1": "192px" }, "2x1");

  return (
    <HStack
      width="full"
      spacing={12}
      overflowX="auto"
      rounded="lg"
      flexShirnk={0}
    >
      {genres.map({ name, image }, index) => (
      <LinkBox as="article" pb={3} role="group" key={`${index}-${name}`}>
        <VStack spacing={4}>
          <Box rounded="lg" overflow="hidden" width={imageSage} height={imageSize}>
            <LinkOverlay href="#">
              <Image transition="ease-out"
                transitionProperty="all" t
                ransitionDuration="normal"
                _groupHover={{ transform: "scale(1.1, 1.1)" }}
                src={image}
                width={imageSize}
                height={imageSize}
                objectFit="cover"
                quality="100" />
            </LinkOverlay>
          </Box>
          <Text fontWeight="medium">{name}</Text>
        </VStack>
      </LinkBox>
    )}
    </HStack>
  )
};
