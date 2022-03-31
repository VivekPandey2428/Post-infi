import { FC } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  variant?: "contained" | "outlined" | "text";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
}

const useStyles = makeStyles({
  button: {
    margin: "0.5rem",
    padding: "0.5rem 2rem",
  },
});

export const CustomButton: FC<CustomButtonProps> = (props) => {
  const { color, disabled, onClick, variant, type, children } = props;
  const styles = useStyles();

  return (
    <Button
      type={type || "button"}
      variant={variant || "contained"}
      disabled={disabled}
      onClick={onClick}
      color={color || "primary"}
      className={styles.button}
    >
      {children}
    </Button>
  );
};
