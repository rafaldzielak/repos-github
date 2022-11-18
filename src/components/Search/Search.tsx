import React, { FC } from "react";
import { Center, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type SearchProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  defaultValue: string;
  placeholder?: string;
};

const Search: FC<SearchProps> = ({ setValue, defaultValue, placeholder }) => {
  return (
    <Center>
      <InputGroup width="400px">
        <Input
          p="1.5rem"
          fontSize="1.25rem"
          fontWeight="semibold"
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputRightElement py="1.5rem">
          <SearchIcon color="green.500" />
        </InputRightElement>
      </InputGroup>
    </Center>
  );
};

export default Search;
