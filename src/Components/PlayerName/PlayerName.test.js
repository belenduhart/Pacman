import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "../test-utils/test-utils";
import PlayerName from "./PlayerName";

test("render Player Name label successfully", () => {
  render(<PlayerName />);
  const playerName = screen.getByText(/player name/i);
  expect(playerName).toBeInTheDocument();
});

describe("input disables/enables button onChange", () => {
  test("input clear and button disabled", () => {
    render(<PlayerName />);
    const input = screen.getByRole("textbox");
    userEvent.clear(input);
    const button = screen.getByRole("button", { name: /start/i });
    expect(button).toBeDisabled();
  });

  test("input on change enable button ", () => {
    render(<PlayerName />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /start/i });
    userEvent.type(input, { target: { value: "Jhon" } });
    waitFor(() => expect(button).toBeEnabled());
  });
});

describe("link and button", () => {
  test("href to Game Page", () => {
    render(<PlayerName />);
    const goLink = screen.getByRole("link", { name: /start/i });
    expect(goLink).toHaveAttribute("href", "/Game");
  });

  test("click on button redirect to Game Page component", () => {
    render(<PlayerName />);
    const button = screen.getByRole("button", { name: /start/i });
    const location = window.location.pathname;
    userEvent.click(button);
    waitFor(() => expect(location).toBe("/Game"));
  });
});
