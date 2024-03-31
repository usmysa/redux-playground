import { style } from "@vanilla-extract/css";

export const button = style({
  width: "200px",
  ":hover": {
    cursor: "pointer",
  },
});
