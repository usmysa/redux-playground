import { style } from "@vanilla-extract/css";

const baseLetter = style({
  fontSize: "4rem",
});

export const scoreSection = style({
  flexGrow: 0,
});

export const timerSection = style({
  flexGrow: 0,
});

export const inputSection = style({
  flexGrow: 1,
});

export const typedInLetter = style([
  baseLetter,
  {
    color: "black",
    fontWeight: 600,
  },
]);

export const willTypeInLetter = style([
  baseLetter,
  {
    color: "#dee2e6",
  },
]);
