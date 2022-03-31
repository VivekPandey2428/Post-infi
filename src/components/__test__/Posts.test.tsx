import { render } from "@testing-library/react";
import { Posts } from "..";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/globalStyles";
import { MemoryRouter } from "react-router-dom";

const mockPosts = [
  {
    author: "raj_kar",
    created_at: "2022-02-15T10:27:01.000",
    title: "The Next Js Developer",
    url: "https://medium.com/@raj_kar/the-next-js-developer-eb8f1d1d1c",
    _tags: ["javascript", "react", "js"],
    objectID: "5",
  },
  {
    author: "chandra_kumar",
    created_at: "2022-02-15T10:27:01.000",
    title: "Then Facebook Will Be The Biggest Company In The World",
    url: "https://medium.com/@raj_kar/the-next-js-developer-eb8f1d1d1c",
    _tags: ["javascript", "react", "js"],
    objectID: "6",
  },
];

const MockPostComponent = () => {
  const incrementCounter = jest.fn();

  return (
    <ThemeProvider theme={theme}>
      {
        <Posts
          posts={mockPosts}
          error={false}
          incrementCounter={incrementCounter}
          isSearched={false}
          loading={false}
        />
      }
    </ThemeProvider>
  );
};

describe("<Posts />", () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  // should render the posts component
  it("should render the posts component", () => {
    render(<MockPostComponent />, { wrapper: MemoryRouter });
  });
});
