import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { getRepos } from "../queries/repoQuery";
import { SearchResult } from "../types.ts/Search";

const Repos: FC = () => {
  const {
    data: repoData,
    loading,
    error,
  } = useQuery<{ search: SearchResult }>(getRepos, { variables: { query: "react", first: 5 } });

  return (
    <div>
      {repoData?.search.nodes.map((repo) => (
        <div key={repo.name + repo.forks.totalCount}>{repo.name}</div>
      ))}
    </div>
  );
};

export default Repos;
