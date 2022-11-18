import { render, screen, waitFor } from "@testing-library/react";
import Search from "./Search";
import userEvent from "@testing-library/user-event";

describe("<Search/>", () => {
  test("render correct content", () => {
    render(<Search setValue={vi.fn()} defaultValue="test" placeholder="Search for repositories" />);
    screen.getByPlaceholderText("Search for repositories");
    screen.getByDisplayValue("test");
  });

  test("calls setValue correctly", async () => {
    const setValueMock = vi.fn();
    render(<Search setValue={setValueMock} defaultValue="test" placeholder="Search for repositories" />);
    const searchInput = screen.getByPlaceholderText("Search for repositories");
    userEvent.clear(searchInput);
    expect(setValueMock).toHaveBeenNthCalledWith(1, "");
    userEvent.type(searchInput, "a");
    await waitFor(() => expect(setValueMock).toHaveBeenNthCalledWith(2, "a"));
    userEvent.type(searchInput, "b");
    await waitFor(() => expect(setValueMock).toHaveBeenNthCalledWith(3, "ab"));
  });
});
