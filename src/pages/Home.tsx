import { useCallback, useEffect, useState } from "react";
import { Container, Posts, Search, Text, Timer } from "../components";
import { useFetchPosts } from "../hooks";
import { StateProps } from "./interfaces";

export const Home = () => {
  const [state, setState] = useState<StateProps>({
    currentPage: 1,
    maximumPages: 49,
    fetchPostsAfter: 10,
  });
  const { isLoading, error, posts, sendRequest: fetchPosts } = useFetchPosts();
  const [keyword, setKeyword] = useState("");
  let finalPosts = posts;

  // increment page number if isLoading is false
  const incresePageCount = useCallback(() => {
    if (state.currentPage < state.maximumPages && !isLoading) {
      setState((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }));
    }
  }, [isLoading, state.currentPage, state.maximumPages]);

  // fetch posts after every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      incresePageCount();
    }, state.fetchPostsAfter * 1000);

    return () => {
      clearInterval(interval);
    };
  });

  // initial fetch
  useEffect(() => {
    fetchPosts(state.currentPage);
  }, [state.currentPage, fetchPosts]);

  const isSearched = keyword.length > 0;
  const isFinished = state.currentPage === state.maximumPages;

  // filter posts by title or author
  if (isSearched) {
    finalPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(keyword) ||
        post.author.toLowerCase().includes(keyword)
    );
  }

  return (
    <Container>
      <Text component="h2" variant="h4" fontWeight={700} color="primary">
        🎶 Infinite Scrolling 🎶
      </Text>

      {!isFinished && <Timer fetchPostsAfter={state.fetchPostsAfter} />}

      <Search setKeyword={setKeyword} />

      <Posts
        loading={isLoading}
        error={error}
        posts={finalPosts}
        incrementCounter={incresePageCount}
        isSearched={isSearched}
      />

      {isFinished && !isLoading && (
        <h2>You are all caught cup, now take some Rest </h2>
      )}

      {isSearched && finalPosts.length < 1 && (
        <Text color="secondary" fontWeight={700}> Sorry, No Match Found </Text>
      )}
    </Container>
  );
};
