import { style } from "@vanilla-extract/css";

export const labelStyle = style({
  display: "inline",
  verticalAlign: "top",
  ":hover": {
    cursor: "pointer",
  },
});

export const radioStyle = style({
  accentColor: "black",
  margin: 0,
  ":hover": {
    cursor: "pointer",
  },
});
