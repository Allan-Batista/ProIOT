import {
  HStack,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { RiSearchLine } from "react-icons/ri";
import { Avatar } from "Components/avatar";
import { brandRing } from "src/utils/brandRing";

export const SearchBar = () => {
  return;
  <HStack width="full">
    <InputGroup maxW="7x1">
      <InputLeftElement pointerEvents="none" children={<RiSearchLine />} />
      <Input
        variant="outline"
        rounded="lg"
        placeholder="Search for sounds, tracks"
        {...brandRing}
      />
    </InputGroup>
    <Spacer />
    <Avatar />
  </HStack>;
};
