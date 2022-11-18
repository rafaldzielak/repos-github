import React from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./utils/apolloClient";
import Repos from "./pages/Repos/Repos";
import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Box as="main" maxW="1200" mx="auto" mt="20">
        <Center>
          <Stack spacing="2rem">
            <Heading margin="auto" color="#333">
              RepoFinder
            </Heading>
            <Repos />
          </Stack>
        </Center>
      </Box>
    </ApolloProvider>
  );
}

export default App;
