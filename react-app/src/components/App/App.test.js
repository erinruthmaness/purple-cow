import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("renders a button", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
});

test("button click reveals hit count", async () => {
    render(<App />);

    const missingElement = screen.findByText(/The count is/);

    expect(missingElement).toMatchObject({}); //empty

    fireEvent.click(screen.getByText(/Reveal Hit Count/));

    const paragraphElement = await screen.findByText(/The count is/);
    expect(paragraphElement).toBeInTheDocument();
});
