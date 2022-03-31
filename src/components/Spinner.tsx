import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { theme } from "../styles/globalStyles";

interface SpinnerProps {
  color?: "primary" | "secondary" | "inherit";
  size?: "small" | "medium" | "large";
}

export const Spinner: FC<SpinnerProps> = ({ color, size }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      style={{ margin: theme.spacing(2) }}
      data-testid="spinner"
    >
      <CircularProgress color={color} size={size} />
    </Box>
  );
};
