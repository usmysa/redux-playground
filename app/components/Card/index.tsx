import { useStyles } from "@/hooks";
import { useTheme } from "@/providers/theme";
import type { Spacing, Radius } from "@/theme.types";
import { toPixel } from "@/utils";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { styleVars, wrapper } from "./styles.css";

type Props = {
  h?: React.CSSProperties["height"];
  p?: Spacing;
  radius?: Radius;
  w?: React.CSSProperties["width"];
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({
  children,
  h: height,
  p: padding = "md",
  radius = "md",
  w: width,
  ...props
}: React.PropsWithChildren<Props>) {
  const theme = useTheme();
  const { getSpacing } = useStyles(theme);

  return (
    <div
      className={wrapper}
      style={assignInlineVars({
        [styleVars.height]: toPixel(height),
        [styleVars.padding]: getSpacing(padding),
        [styleVars.radius]: getSpacing(radius),
        [styleVars.width]: toPixel(width),
      })}
      {...props}
    >
      {children}
    </div>
  );
}
