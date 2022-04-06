import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../theme";
import "../styles.css";

function App({ Component, pageProps }) {
  <ChakraProvider theme={theme}>
    return <Component {...pageProps} />;
  </ChakraProvider>;
}

export default App;
