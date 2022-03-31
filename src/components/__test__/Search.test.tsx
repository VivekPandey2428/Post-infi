import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from "..";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/globalStyles";

const MockSearch = () => {
  const setKeyword = jest.fn();
  return (
    <ThemeProvider theme={theme}>
      <Search setKeyword={setKeyword} />
    </ThemeProvider>
  );
};

describe("<Search />", () => {
  // should render the search component
  it("should render the search component", () => {
    render(<MockSearch />);
  });

  //   should render the search input title
  it("should render the search input title", () => {
    render(<MockSearch />);
    expect(screen.getByText(/Search for Title | Author/i)).toBeInTheDocument();
  });

  //   should render the search input
  it("should render the search input", () => {
    render(<MockSearch />);
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  //   should take input and set the keyword
  it("should take input and set the keyword", () => {
    const setKeyword = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Search setKeyword={setKeyword} />
      </ThemeProvider>
    );
    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "test" } });
    expect(setKeyword).toHaveBeenCalledWith("test");
  });
});
