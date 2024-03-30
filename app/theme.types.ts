export type SizeValues = "xs" | "sm" | "md" | "lg" | "xl";
export type Size = SizeValues | number | (string & {});
export type Spacing = Size;
export type Radius = Size;

export type Theme = {
  colors: Record<string, string>;
  spacing: Record<SizeValues, string>;
  radius: Record<SizeValues, string>;
};
