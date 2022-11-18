import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Repos from "./Repos";
import { reposMock, newSearchReposMock } from "./Repos.mocks";
import { Repo } from "../../types.ts/Repo";
import userEvent from "@testing-library/user-event";

const repos: Repo[] = reposMock.result.data.search.nodes;
const newSearchRepos: Repo[] = newSearchReposMock.result.data.search.nodes;

describe("<Repos/>", () => {
  test("renders correct content for example repos", async () => {
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

  test("renders correct content for new search with debounce", async () => {
    render(
      <MockedProvider mocks={[newSearchReposMock]}>
        <Repos />
      </MockedProvider>
    );
    await waitForElementToBeRemoved(screen.queryByText("Loading..."));
    const searchInput = screen.getByPlaceholderText("Search for repositories");

    userEvent.clear(searchInput);
    userEvent.type(searchInput, "reac");

    expect(screen.queryByText("Loading...")).toBeFalsy();
    await waitFor(() => screen.getByText("Loading..."));
    await waitForElementToBeRemoved(screen.queryByText("Loading..."));

    newSearchRepos.forEach((repo) => {
      screen.getByText(repo.forks.totalCount);
      const repoUrl = screen.getByText(repo.name) as HTMLAnchorElement;
      expect(repoUrl.href).toEqual(repo.url);
      screen.getByText(repo.stargazers.totalCount);
    });
  });

  test("does not render table when no query provided", async () => {
    render(
      <MockedProvider mocks={[reposMock]}>
        <Repos />
      </MockedProvider>
    );
    await waitForElementToBeRemoved(screen.queryByText("Loading..."));
    screen.getByText("Name");
    const searchInput = screen.getByPlaceholderText("Search for repositories");
    userEvent.clear(searchInput);
    await waitFor(() => expect(screen.queryByText("Name")).toBeFalsy());
  });
});
