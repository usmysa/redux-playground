import { vars } from "@/styles/global/theme.css";
import { createVar, style } from "@vanilla-extract/css";

export const styleVars = {
  width: createVar(),
};

export const timer = style({
  borderRadius: vars.radius.xs,
  width: styleVars.width,
  "::-webkit-progress-bar": {
    backgroundColor: "#dee2e6",
    borderRadius: vars.radius.md,
  },
  "::-webkit-progress-value": {
    backgroundColor: "black",
    borderRadius: vars.radius.md,
  },
  "::-moz-progress-bar": {
    backgroundColor: "#dee2e6",
    borderRadius: vars.radius.md,
  },
  "::-ms-fill": {
    backgroundColor: "black",
    borderRadius: vars.radius.md,
  },
});
