import type { Radius, Size, Spacing, Theme } from "@/theme.types";
import { toPixel } from "@/utils";
import { useCallback } from "react";

export function useStyles(theme: Theme) {
  const { radius, spacing } = theme;

  const getSpacing = useCallback(
    (value: Spacing) => getSize(value, spacing),
    [spacing],
  );

  const getRadius = useCallback(
    (value: Radius) => getSize(value, radius),
    [radius],
  );

  return {
    getSpacing,
    getRadius,
  };
}

const getSize = (
  value: Size | number | string,
  sizeObj: Record<Size, string>,
) => {
  if (typeof value === "number") {
    return toPixel(value);
  }

  return sizeObj[value] ?? toPixel(value);
};
