import { createTheme } from "@mui/material/styles";
import { indigo, pink } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export const useTypography = makeStyles({
  text: {
    fontFamily: "Quicksand",
  }
});
