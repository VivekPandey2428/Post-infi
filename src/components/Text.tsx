import { FC } from "react";
import Typography from "@mui/material/Typography";

interface Props {
  key?: any;
  children: React.ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
  component?: React.ElementType<any>;
  fontWeight?: 400 | 500 | 600 | 700 | 800;
  color?: "inherit" | "primary" | "secondary" | "textPrimary" | "textSecondary";
}

export const Text: FC<Props> = ({
  children,
  component,
  variant,
  fontWeight,
  color,
}) => {
  return (
    <Typography
      component={component || "p"}
      variant={variant || "h6"}
      fontWeight={fontWeight || 500}
      gutterBottom
      color={color || "textSecondary"}
      noWrap
    >
      {children}
    </Typography>
  );
};
