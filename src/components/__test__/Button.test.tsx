import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "..";

// shoudle render a button
describe("Button", () => {
  const getBtn = () => {
    render(<Button>Search</Button>);
    return screen.getByRole("button");
  };

  // should render a button with given text
  test("should render the Button", () => {
    const btn = getBtn();
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent("Search");
  });

  //   should disable the button is disabled prop is true
  test("should disable the button is disabled prop is true", () => {
    render(<Button disabled={true}>Search</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });

  //   button type should be button by default
  test("button type should be button by default", () => {
    const btn = getBtn();
    expect(btn).toHaveAttribute("type", "button");
  });

  // button type should be be changed to submit if type is submit
  test("button type should be be changed to submit if type is submit", () => {
    render(<Button type="submit">Search</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("type", "submit");
  });

  //   should dispatch an action on click
  test("should dispatch an action on click", () => {
    const mockDispatch = jest.fn();
    render(<Button onClick={mockDispatch}>Search</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeEnabled();
    fireEvent.click(btn);
    expect(mockDispatch.call.length).toBe(1);
  });
});
