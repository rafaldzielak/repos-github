import { getRepos } from "../../queries/repoQuery";

export const reposMock = {
  request: {
    query: getRepos,
    variables: {
      query: "react",
      first: 10,
    },
  },
  result: {
    data: {
      search: {
        __typename: "SearchResultItemConnection",
        nodes: [
          {
            __typename: "Repository",
            stargazers: {
              __typename: "StargazerConnection",
              totalCount: 197843,
            },
            forks: {
              __typename: "RepositoryConnection",
              totalCount: 39606,
            },
            name: "react repo",
            url: "https://github.com/facebook/react",
          },
          {
            __typename: "Repository",
            stargazers: {
              __typename: "StargazerConnection",
              totalCount: 4680,
            },
            forks: {
              __typename: "RepositoryConnection",
              totalCount: 1659,
            },
            name: "reacts",
            url: "https://github.com/duxianwei520/react",
          },
          {
            __typename: "Repository",
            stargazers: {
              __typename: "StargazerConnection",
              totalCount: 1138,
            },
            forks: {
              __typename: "RepositoryConnection",
              totalCount: 522,
            },
            name: "reactly",
            url: "https://github.com/discountry/react",
          },
          {
            __typename: "Repository",
            stargazers: {
              __typename: "StargazerConnection",
              totalCount: 2076,
            },
            forks: {
              __typename: "RepositoryConnection",
              totalCount: 324,
            },
            name: "reactjs",
            url: "https://github.com/primer/react",
          },
          {
            __typename: "Repository",
            stargazers: {
              __typename: "StargazerConnection",
              totalCount: 988,
            },
            forks: {
              __typename: "RepositoryConnection",
              totalCount: 442,
            },
            name: "reactts",
            url: "https://github.com/react-redux-antd-es6/react",
          },
        ],
      },
    },
  },
};

export const newSearchReposMock = {
  ...reposMock,
  request: {
    query: getRepos,
    variables: {
      query: "reac",
      first: 10,
    },
  },
};
