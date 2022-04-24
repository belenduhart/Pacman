import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PlayerContextProvider } from "../PlayerName/PlayerContext";
import { GridContextProvider } from "../GamePage/Grid/GridContext";

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <PlayerContextProvider>
        <GridContextProvider>{children}</GridContextProvider>
      </PlayerContextProvider>
    </BrowserRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
