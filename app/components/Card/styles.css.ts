import { createVar, style } from "@vanilla-extract/css";

export const styleVars = {
  height: createVar(),
  padding: createVar(),
  radius: createVar(),
  width: createVar(),
};

export const wrapper = style({
  border: "1px solid #dee2e6",
  borderRadius: styleVars.radius,
  height: styleVars.height,
  padding: styleVars.padding,
  width: styleVars.width,
});
