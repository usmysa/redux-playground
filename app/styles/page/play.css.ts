import { keyframes, style } from "@vanilla-extract/css";

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

const animationShake = keyframes({
  "0%": { transform: "translate(0, 0);" },
  "5%": { transform: "translate(-8px, 0);" },
  "10%": { transform: "translate(8px, 0);" },
  "15%": { transform: "translate(-8px, 0);" },
  "20%": { transform: "translate(8px, 0);" },
  "25%": { transform: "translate(-8px, 0);" },
  "30%": { transform: "translate(0, 0);" },
  "100%": { transform: "translate(0, 0);" },
});

export const shake = style({
  animationName: animationShake,
  animationDuration: "0.5s",
});

export const wordContainer = style({
  height: "100%",
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
