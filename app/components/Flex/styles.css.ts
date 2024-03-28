import { createVar, fallbackVar, style } from "@vanilla-extract/css";

export const styleVars = {
  alignItems: createVar(),
  flexDirection: createVar(),
  gap: createVar(),
  height: createVar(),
  justifyContent: createVar(),
  marginTop: createVar(),
  padding: createVar(),
  paddingTop: createVar(),
  width: createVar(),
};

export const wrapper = style({
  alignItems: styleVars.alignItems,
  display: "flex",
  flexDirection: styleVars.flexDirection,
  gap: styleVars.gap,
  height: styleVars.height,
  justifyContent: styleVars.justifyContent,
  marginTop: styleVars.marginTop,
  padding: styleVars.padding,
  paddingTop: fallbackVar(styleVars.paddingTop, styleVars.padding),
  width: styleVars.width,
});
