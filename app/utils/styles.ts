export const toPixel = (value: number | string | undefined) => {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value === "number") {
    return `${value}px`;
  }

  if (value === "") {
    return "0px";
  }

  return value.endsWith("px") || value.endsWith("%") ? value : `${value}px`;
};
