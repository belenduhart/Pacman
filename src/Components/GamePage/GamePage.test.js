import GamePage from "./GamePage";
import { render, screen, waitFor } from "../test-utils/test-utils";
import userEvent from "@testing-library/user-event";

test("render correctly welcome greeting", () => {
  render(<GamePage />);
  const Greeting = screen.getByText(/welcome/i);
  expect(Greeting).toBeInTheDocument();
});
describe("buttons rendered successfully", () => {
  test("place button rendered and disabled", () => {
    render(<GamePage />);
    const placeButton = screen.getByRole("button", {
      name: "PRESS 'ENTER' FOR PLACE",
    });
    expect(placeButton).toBeInTheDocument();
    expect(placeButton).toBeDisabled();
  });

  test("report button rendered and disabled", () => {
    render(<GamePage />);
    const reportButton = screen.getByRole("button", {
      name: "PRESS 'R' for REPORT (scroll to see it all)",
    });
    expect(reportButton).toBeInTheDocument();
    expect(reportButton).toBeDisabled();
  });
});

describe("testing grid", () => {
  test("render grid", () => {
    render(<GamePage />);
    const dots = document.getElementsByClassName("grid dot-square");
    expect(dots).toHaveLength(25);
  });

  test("press enter and place pacman", () => {
    render(<GamePage />);
    const dots = document.getElementsByClassName("grid dot-square");
    const pacman = document.getElementsByClassName("position-zero");
    userEvent.keyboard("{enter}");
    expect(dots).toHaveLength(24);
    expect(pacman).toHaveLength(1);
  });

  test("pacman be placed in 0,0", () => {
    render(<GamePage />);
    const initialPosition = document.getElementsByClassName("position-zero");
    const initialPositionId = document.getElementById("00");
    userEvent.keyboard("{enter}");
    waitFor(() => {
      expect(initialPosition).toEqual(initialPositionId);
    });
  });
});

test("press R for report", () => {
  render(<GamePage />);
  const report = screen.findByText(/output/i);
  userEvent.keyboard("[KeyR]");
  waitFor(() => {
    expect(report).toBeInTheDocument();
  });
});

test("rotate pacman Up", () => {
  render(<GamePage />);
  const pacmanUp = document.getElementsByClassName("position-zero img-UP");
  userEvent.keyboard("{arrowup}");
  waitFor(() => {
    expect(pacmanUp).toHaveLength(1);
  });
});

describe("move Pacman to the left", ()=>{
  test("rotate pacman left", ()=> {
  render(<GamePage/>);
  const pacmanLeft = document.getElementsByClassName("position-zero img-LEFT");
    userEvent.keyboard("{arrowleft}");
    waitFor(() => {
      expect(pacmanLeft).toHaveLength(1);
    });
  });

  test("move pacman to the left", ()=>{
    render(<GamePage/>);
    const initialPacman = document.getElementsByClassName("position-zero img-LEFT").id;
    const finalPacman = document.getElementsByClassName("position-zero img-LEFT").id;
    userEvent.keyboard("{backspace}");
    waitFor(()=>{
      expect(initialPacman).not.toEqual(finalPacman);
    });
  });
});


