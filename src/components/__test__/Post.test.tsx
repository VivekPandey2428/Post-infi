import { fireEvent, render, screen } from "@testing-library/react";
import { FC } from "react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/globalStyles";
import { Post } from "..";
import { RawPostProps } from "../../hooks/useFetchPosts";
import { formatDateTime } from "../../helpers";

const mockData = {
  author: "raj_kar",
  created_at: "2022-02-15T10:27:01.000",
  title: "The Next Js Developer",
  url: "https://medium.com/@raj_kar/the-next-js-developer-eb8f1d1d1c",
  _tags: ["javascript", "react", "js"],
  objectID: "5",
};

interface MockPostProps {
  post: RawPostProps;
}

const MockPostComponent: FC<MockPostProps> = ({ post }) => {
  return (
    <ThemeProvider theme={theme}>
      <Post post={post} />
    </ThemeProvider>
  );
};

describe("<Post />", () => {
  // should render the post component
  it("should render the post component", () => {
    render(<MockPostComponent post={mockData} />, { wrapper: MemoryRouter });
  });

  //   should render the post title
  it("should render the post title", () => {
    render(<MockPostComponent post={mockData} />, { wrapper: MemoryRouter });
    expect(screen.getByText(mockData.title)).toBeInTheDocument();
  });

  //   should render the post author
  it("should render the post author", () => {
    render(<MockPostComponent post={mockData} />, { wrapper: MemoryRouter });
    expect(screen.getByText(`by @${mockData.author}`)).toBeInTheDocument();
  });

  //  should render the post date
  it("should render the post date", () => {
    render(<MockPostComponent post={mockData} />, { wrapper: MemoryRouter });
    expect(
      screen.getByText(formatDateTime(mockData.created_at))
    ).toBeInTheDocument();
  });

  //   should render the post tags
  it("should render the post tags", () => {
    render(<MockPostComponent post={mockData} />, { wrapper: MemoryRouter });
    expect(
      screen.getByText(`TAGS - ${mockData._tags.join(", ")}`)
    ).toBeInTheDocument();
  });

  //   should render both the buttons
  it("should render the button", () => {
    render(<MockPostComponent post={mockData} />, { wrapper: MemoryRouter });
    expect(
      screen.getByRole("button", { name: /Show Raw Data/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Read More/i })
    ).toBeInTheDocument();
  });

  //   buttons should be clickable
  it("should be clickable", () => {
    render(<MockPostComponent post={mockData} />, {
      wrapper: MemoryRouter,
    });
    const button = screen.getByRole("button", { name: /Show Raw Data/i });
    fireEvent.click(button);

    const readMoreBtn = screen.getByRole("button", { name: /Read More/i });
    fireEvent.click(readMoreBtn);
  });
});
