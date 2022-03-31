import { FC } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Container } from ".";

interface InputFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme : Theme) => {
  return {
    input: {
      width: "25rem",
      backgroundColor: "#f1f1f1",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  };
});

export const InputForm: FC<InputFormProps> = ({ onChange }) => {
  const styles = useStyles();

  return (
    <form autoComplete="off">
      <Container>
        <TextField
          label="Search"
          variant="outlined"
          type="text"
          onChange={onChange}
          inputProps={{ "data-testid": "search-input" }}
          className={styles.input}
        />
      </Container>
    </form>
  );
};
