import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Details } from "..";

const MockData = {
  author: "raj_kar",
  created_at: "2022-02-15T10:27:01.000",
  title: "The Next Js Developer",
  url: "https://medium.com/@raj_kar/the-next-js-developer-eb8f1d1d1c",
  _tags: ["javascript", "react", "js"],
  objectID: "5",
};

const MockComponent = () => {
  const history = createMemoryHistory();
  history.push("/details", { ...MockData });
  return (
    <Router location={history.location} navigator={history}>
      <Details />
    </Router>
  );
};

describe("<Details />", () => {
  // should render the details component
  it("should render the details component", () => {
    render(<MockComponent />);
  });

  //   should render the details
  it("should render the details", () => {
    render(<MockComponent />);
    expect(screen.getByText(/The Next Js Developer/i)).toBeInTheDocument();
  });

  //   back button should rendered
  it("should render the back button", async () => {
    const history = createMemoryHistory();
    history.push("/details", { ...MockData });
    render(
      <Router location={history.location} navigator={history}>
        <Details />
      </Router>
    );
    const btn = screen.getByRole("button", { name: /Go Back/i });
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);

    // await waitFor(() => {
    //   expect(history.location.pathname).toBe("/");
    // });
  });
});
