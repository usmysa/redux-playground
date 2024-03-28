export type SizeValues = "xs" | "sm" | "md" | "lg" | "xl";
// eslint-disable-next-line @typescript-eslint/ban-types
export type Size = SizeValues | number | (string & {});
export type Spacing = Size;
export type Radius = Size;

export type Theme = {
  spacing: Record<SizeValues, string>;
  radius: Record<SizeValues, string>;
};
