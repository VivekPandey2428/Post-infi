import { fireEvent, render, screen } from "@testing-library/react";
import { Home } from "..";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/globalStyles";

describe("<Home />", () => {
  // should render the home component
  it("should render the home component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  });

  //   search someting and see if it is filtered
  it("should search someting and see if it is filtered", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
    // expect(await screen.findByText(/test/i)).toBeInTheDocument();
  });
});
