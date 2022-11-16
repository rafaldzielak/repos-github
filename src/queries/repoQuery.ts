import { gql } from "@apollo/client";

export const getRepos = gql`
  query GetRepos($query: String!, $first: Int!) {
    search(query: $query, type: REPOSITORY, first: $first) {
      nodes {
        ... on Repository {
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          name
        }
      }
    }
  }
`;
