import { Center, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Center>
      <Spinner width="100px" height="100px" />
    </Center>
  );
};

export default Loader;
