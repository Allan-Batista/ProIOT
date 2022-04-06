import { chakra } from "@chakra-ui/react";

export const Image = chakra({
  shoulForwardProp: (prop) => ["width", "height", "src", "alt", "quality"],.includes(prop),
});
