import { useStyles } from "@/hooks";
import { useTheme } from "@/providers/theme";
import type { Spacing } from "@/theme.types";
import { toPixel } from "@/utils";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { styleVars, wrapper } from "./styles.css";

type Props = {
  align?: React.CSSProperties["alignItems"];
  direction?: React.CSSProperties["flexDirection"];
  gap?: Spacing;
  h?: React.CSSProperties["height"];
  justify?: React.CSSProperties["justifyContent"];
  mt?: Spacing;
  p?: Spacing;
  w?: React.CSSProperties["width"];
} & React.HTMLAttributes<HTMLDivElement>;

export function Flex({
  align = "normal",
  children,
  direction = "row",
  gap = 0,
  h: height,
  justify = "flex-start",
  mt: marginTop = 0,
  p: padding = 0,
  w: width,
  ...props
}: React.PropsWithChildren<Props>) {
  const theme = useTheme();
  const { getSpacing } = useStyles(theme);

  return (
    <div
      className={wrapper}
      style={assignInlineVars({
        [styleVars.alignItems]: align,
        [styleVars.flexDirection]: direction,
        [styleVars.gap]: getSpacing(gap),
        [styleVars.height]: toPixel(height),
        [styleVars.justifyContent]: justify,
        [styleVars.marginTop]: getSpacing(marginTop),
        [styleVars.padding]: getSpacing(padding),
        [styleVars.width]: toPixel(width),
      })}
      {...props}
    >
      {children}
    </div>
  );
}
