import { VStack, HStack } from "@chakra-ui/react";

import { TopPicks } from "../../components/TopPicks";
import { SideBar } from "../SideBar";
import { SearchBar } from "../../components/Search-bar";
import { GenresCarousel } from "../../components/Genres-carousel";
import { TopProducers } from "../TopProducers";

export const Content = () => {
  return (
    <HStack width="full" flex={1} overflow="hidden">
      <SideBar />

      <VStack
        px={12}
        pt={12}
        width="full"
        height="full"
        spacing={6}
        overflow="hidden"
      >
        <SearchBar />
        <GenresCarousel />
        <HStack width="full" alignItems="flex-start" overflow="hidden" flex={1}>
          <TopPicks flex={1} />
          <TopProducers flexShrink={0} />
        </HStack>
      </VStack>
    </HStack>
  );
};
