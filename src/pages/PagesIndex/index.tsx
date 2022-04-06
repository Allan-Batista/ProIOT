import { VStack } from "@chakra-ui/react";
import { Content } from "../../components/Content";
import { Player } from "../../components/Player";

const IndexPage = () => (
  <VStack height="100vh" bg='black' width="full" overflow="hidden" spacing="0">
    <Content />
    <Player />
  </VStack>
);

export default IndexPage;
