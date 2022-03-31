import { FC } from "react";
import Grid from "@mui/material/Grid";

interface Props {
  children: React.ReactNode;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
}

export const Container: FC<Props> = ({
  children,
  alignItems,
  direction,
  justifyContent,
}) => {
  return (
    <Grid
      container
      justifyContent={justifyContent || "center"}
      flexDirection={direction || "column"}
      alignItems={alignItems || "center"}
    >
      {children}
    </Grid>
  );
};
