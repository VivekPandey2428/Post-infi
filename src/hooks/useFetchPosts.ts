import { useCallback, useState } from "react";

export type RawPostProps = {
  author: string;
  created_at: string;
  title: string;
  url: string;
  _tags: Array<string>;
  objectID: string;
};

export const useFetchPosts = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<Array<RawPostProps>>([]);

  const sendRequest = useCallback(async (pageNumber: number) => {
    // console.log(`Fetch Posts From Page no ${pageNumber}`);
    setLoading(true);
    try {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNumber}`
      );
      const data = await res.json();
      setPosts((prev) => prev.concat(data.hits));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { isLoading, error, posts, sendRequest };
};
