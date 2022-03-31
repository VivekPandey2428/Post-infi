import { FC, useEffect, useState } from "react";
import { Text } from ".";

interface TimerProps {
  fetchPostsAfter: number;
}

export const Timer: FC<TimerProps> = ({ fetchPostsAfter }) => {
  const [timer, setTimer] = useState(fetchPostsAfter);

  // Display a 10 second timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimer((prev) => (prev <= 1 ? fetchPostsAfter : prev - 1));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timer, fetchPostsAfter]);

  return (
    <Text color="secondary" fontWeight={600}>
      New posts will fetch within {timer} sec.
    </Text>
  );
};
