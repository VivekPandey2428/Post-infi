import { useLocation } from "react-router-dom";
import { Button, Container, Text } from "../components";
import { RawPostProps } from "../hooks/useFetchPosts";
import { useTypography } from "../styles/globalStyles";

export const Details = () => {
  const location = useLocation();
  const post = location.state as RawPostProps;
  const styles = useTypography();

  return (
    <Container>
      <Text component="h2" variant="h4" fontWeight={700} color="primary">
        RAW DATA VIEW
      </Text>
      <pre className={styles.text}>{JSON.stringify(post, null, 1)}</pre>
      <Button variant="outlined" onClick={() => window.history.back()}>
        GO BACK
      </Button>
    </Container>
  );
};
