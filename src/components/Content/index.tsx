import { VStack, HStack } from "@chakra-ui/react";

import { TopPicks } from "components/top-picks";
import { Sidebar } from "../SideBar";
import { SearchBar } from "components/searchBar";
import { GenresCarousel } from "components/genres-carousel";
import { TopProducers } from "../TopProducers";

export const Content = () => {
  return (
    <HStack width="full" flex={1} overflow="hidden">
      <Sidebar />

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
  )
};
