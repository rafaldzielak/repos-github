import React from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./utils/apolloClient";
import Repos from "./pages/Repos";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <header>Hi</header>
        <Repos />
      </div>
    </ApolloProvider>
  );
}

export default App;
