import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { getRepos } from "../../queries/repoQuery";
import { SearchResult } from "../../types.ts/Search";
import { Alert } from "@chakra-ui/react";
import ReposTable from "../../components/ReposTable/ReposTable";
import Loader from "../../components/Loader/Loader";

const Repos: FC = () => {
  const {
    data: repoData,
    loading,
    error,
  } = useQuery<{ search: SearchResult }>(getRepos, { variables: { query: "react", first: 5 } });

  if (loading) return <Loader />;
  if (error) return <Alert>{error.message}</Alert>;
  return <>{repoData?.search.nodes && <ReposTable repos={repoData.search.nodes} />}</>;
};

export default Repos;
