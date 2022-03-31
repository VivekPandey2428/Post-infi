import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { RawPostProps } from "../hooks/useFetchPosts";
import { Button, Container, Text } from ".";
import { formatDateTime } from "../helpers";

export type PostProps = {
  post: RawPostProps;
  elementRef?: any;
};

const useStyles = makeStyles((theme: Theme) => {
  return {
    card: {
      marginBottom: "1rem",
      width: "65%",
      cursor: "pointer",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale3d(1.02, 1.02, 1)",
      },
      [theme.breakpoints.down("sm")]: {
        width: "95%",
      },
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  };
});

export const Post: FC<PostProps> = ({ post, elementRef = undefined }) => {
  const navigate = useNavigate();
  const styles = useStyles();

  const handleClick = (post: RawPostProps) => {
    navigate(`/details`, { state: { post } });
  };

  return (
    <Card className={styles.card} elevation={3} ref={elementRef}>
      <CardContent>
        <Text variant="h5" component="h3" fontWeight={700}>
          {post.title}
        </Text>
        <Container direction="row" justifyContent="space-between">
          <Text variant="body2" component="p" fontWeight={600}>
            by @{post.author}
          </Text>
          <Text variant="body2" component="p" fontWeight={600}>
            {formatDateTime(post.created_at)}
          </Text>
        </Container>
        <Text variant="body2" color="primary">
          TAGS - {post._tags.join(", ")}
        </Text>
      </CardContent>
      <CardActions>
        <Container direction="row" justifyContent="space-between">
          <Button variant="outlined" onClick={() => handleClick(post)}>
            Show Raw Data
          </Button>
          <Button variant="contained">
            <a
              className={styles.link}
              href={post.url}
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </Button>
        </Container>
      </CardActions>
    </Card>
  );
};
