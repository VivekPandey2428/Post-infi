import { FC } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { Container, Text } from ".";
import { InputForm } from "./InputForm";

interface SearchProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(5),
    },
  };
});

export const Search: FC<SearchProps> = ({ setKeyword }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Container>
        <Text color="primary" fontWeight={700} component="h5">
          Search for Title | Author
        </Text>
        <InputForm onChange={(e) => setKeyword(e.target.value)} />
      </Container>
    </div>
  );
};
