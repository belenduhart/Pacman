import WelcomePage from "./WelcomePage";
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import userEvent from "@testing-library/user-event";

test('render Title "PACMAN CHALLENGE" correctly',()=>{
    render(<WelcomePage/>,  {wrapper: BrowserRouter});
    const title= screen.getByText(/pacman challenge/i);
    expect(title).toBeInTheDocument();
});


    test('render START button correctly', ()=>{
render(<WelcomePage/>, {wrapper: BrowserRouter});
const startButton= screen.getByRole("button", {name:(/start game/i)});
expect(startButton).toBeInTheDocument();

});

test('href to Player Name page', () => {
    render(<WelcomePage />, {wrapper: BrowserRouter});
    const startLink= screen.getByRole("link", {name:(/start game/i)});
    expect (startLink).toHaveAttribute('href', '/Player')
});

test('click on button redirect to Player Name component', () => {
    render(<WelcomePage />, {wrapper: BrowserRouter});
    const startButton= screen.getByRole("button", {name:(/start game/i)});
    userEvent.click(startButton);
    const location = window.location.pathname
    expect (location).toBe('/Player')
});
