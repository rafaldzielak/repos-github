import { render, screen } from "@testing-library/react";
import ReposTable from "./ReposTable";
import { Repo } from "../../types.ts/Repo";

const mockedRepos: Repo[] = [
  {
    forks: { totalCount: 10 },
    name: "Test repo",
    stargazers: { totalCount: 20 },
    url: "https://sample-url.com/",
  },
  {
    forks: { totalCount: 30 },
    name: "Test repo 2",
    stargazers: { totalCount: 40 },
    url: "https://sample-url-2.com/",
  },
];

describe("<ReposTable/>", () => {
  test("render correct content for example repos", () => {
    render(<ReposTable repos={mockedRepos} />);
    screen.getByText("Name");
    screen.getByText("Forks");
    screen.getByText("Stars");
    mockedRepos.forEach((repo) => {
      screen.getByText(repo.forks.totalCount);
      const repoUrl = screen.getByText(repo.name) as HTMLAnchorElement;
      expect(repoUrl.href).toEqual(repo.url);
      screen.getByText(repo.stargazers.totalCount);
    });
  });

  test("render correct content for empty repos", () => {
    render(<ReposTable repos={[]} />);
    screen.getByText("Name");
    screen.getByText("Forks");
    screen.getByText("Stars");
    screen.getByText("No results found");
  });
});
