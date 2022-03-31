import { FC, useCallback, useRef } from "react";
import { Container, Post, Spinner, Text } from ".";
import { RawPostProps } from "../hooks/useFetchPosts";

export interface PostsProps {
  posts: Array<RawPostProps>;
  loading: boolean;
  error: boolean;
  incrementCounter: () => void;
  isSearched: boolean;
}

interface RefObject {
  disconnect: () => void;
  observe: (node: any) => void;
}

export const Posts: FC<PostsProps> = ({
  posts,
  error,
  loading,
  incrementCounter,
  isSearched,
}) => {
  const observer = useRef<RefObject>();
  const lastPostRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) incrementCounter();
      });
      if (node) observer.current.observe(node);
    },
    [incrementCounter]
  );

  return (
    <Container>
      {error && <Text color="secondary">Someting Goneeeee wrong..</Text>}

      {!error && (
        <Container>
          {posts.map((post: RawPostProps, index) => {
            if (posts.length - 1 === index)
              return (
                <Post
                  post={post}
                  key={index}
                  elementRef={isSearched ? undefined : lastPostRef}
                />
              );
            return <Post post={post} key={index} />;
          })}
        </Container>
      )}

      {loading && <Spinner />}
    </Container>
  );
};
