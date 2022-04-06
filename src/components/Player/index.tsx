import { Box, Container, HStack } from "@chakra-ui/react";
import { FaStepBackward, FaPlay, FaStepForward, FaVolumeUp } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { RiPlayListFill } from 'react-icons/ri';
import { PlayerProgress } from "./player-progress"


import { Disc } from "./disc";
import { SongInfo } from "./song-info";
import { PlayerControls } from "./player-controls";

export const Player = () => {
  return (
    <Box
      width="full"
      bg="gray.dark"
      height={{ base: 24, "2x1": 32 }}
      flexShrink={0}
    >
      <Container centerContent height="full" maxW="7x1">
        <HStack
          width="full"
          height="full"
          justifyContent="flex-start"
          spacing={12}
        >
          <Disc />
          <SongInfo />
          <PlayerControls
            controls={[
              ({ label: "Previus song", icon: <FaStepBackward />)},
          ({label: "Play song", icon:<FaPlay />)},
          ({label: "Next song", icon:<FaStepForward /> )},


          ]} />
          <PlayerProgress />

          <PlayerControls
            controls={[
              ({ label: "Control volume", icon: <FaVolumeUp />)},
          ({label: "Enable repeat", icon:<FiRepeat />)},
          ({label: "Playlist", icon:<RiPlayListFill /> )},


          ]} />
        </HStack>
      </Container>
    </Box>
  );
};
