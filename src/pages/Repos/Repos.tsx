import { useQuery } from "@apollo/client";
import React, { FC, useState } from "react";
import { getRepos } from "../../queries/repoQuery";
import { SearchResult } from "../../types.ts/Search";
import { Alert } from "@chakra-ui/react";
import ReposTable from "../../components/ReposTable/ReposTable";
import Loader from "../../components/Loader/Loader";
import Search from "../../components/Search/Search";
import useDebounce from "../../hooks/useDebounce";

const Repos: FC = () => {
  const [query, setQuery] = useState("react");
  const debouncedQuery = useDebounce(query);

  const {
    data: repoData,
    loading,
    error,
  } = useQuery<{ search: SearchResult }>(getRepos, {
    variables: { query: debouncedQuery, first: 10 },
    skip: !debouncedQuery,
  });

  return (
    <>
      {error && <Alert>{error.message}</Alert>}
      <Search setValue={setQuery} defaultValue={query} placeholder="Search for repositories" />
      {repoData?.search.nodes && <ReposTable repos={repoData.search.nodes} />}
      {loading && <Loader />}
    </>
  );
};

export default Repos;
