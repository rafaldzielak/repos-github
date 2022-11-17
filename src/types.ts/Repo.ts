export type Repo = {
  name: string;
  stargazers: {
    totalCount: number;
  };
  forks: {
    totalCount: number;
  };
  url: string;
};
