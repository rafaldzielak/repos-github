import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Repos from "./Repos";
import { reposMock } from "./Repos.mocks";
import { Repo } from "../../types.ts/Repo";

const repos: Repo[] = reposMock.result.data.search.nodes;

describe("<Repos/>", () => {
  test("render correct content for example repos", async () => {
    render(
      <MockedProvider mocks={[reposMock]}>
        <Repos />
      </MockedProvider>
    );
    await waitForElementToBeRemoved(screen.queryByText("Loading..."));

    screen.getByText("Name");
    screen.getByText("Forks");
    screen.getByText("Stars");
    repos.forEach((repo) => {
      screen.getByText(repo.forks.totalCount);
      const repoUrl = screen.getByText(repo.name) as HTMLAnchorElement;
      expect(repoUrl.href).toEqual(repo.url);
      screen.getByText(repo.stargazers.totalCount);
    });
  });
});
