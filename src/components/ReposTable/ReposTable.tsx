import React, { FC } from "react";
import { Repo } from "../../types.ts/Repo";
import { Table, Thead, Tbody, Tr, Th, Td, Link, Tfoot } from "@chakra-ui/react";

type ReposTableProps = {
  repos: Repo[];
};

const ReposTable: FC<ReposTableProps> = ({ repos }) => {
  return (
    <Table variant="striped" cursor="default">
      <Thead>
        <Tr>
          <Th px="2rem">Name</Th>
          <Th px="2rem" isNumeric>
            Forks
          </Th>
          <Th px="2rem" isNumeric>
            Stars
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {repos.map((repo) => (
          <Tr key={repo.name + repo.forks.totalCount}>
            <Td px="2rem">
              <Link color="teal.800" variant="primary" isExternal href={repo.url}>
                {repo.name}
              </Link>
            </Td>
            <Td px="2rem" isNumeric>
              {repo.forks.totalCount}
            </Td>
            <Td px="2rem" isNumeric>
              {repo.stargazers.totalCount}
            </Td>
          </Tr>
        ))}
      </Tbody>
      {!repos.length && (
        <Tfoot>
          <Tr>
            <Th pt="2rem">No results found</Th>
          </Tr>
        </Tfoot>
      )}
    </Table>
  );
};

export default ReposTable;
