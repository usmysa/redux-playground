import { renderHook } from "@testing-library/react";
import { useStyles } from "./useStyles";

const theme = {
  colors: {},
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
  },
  radius: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
  },
};

describe("useStyles", () => {
  it("getSpacing should return correct values", () => {
    const { result } = renderHook(() => useStyles(theme));
    const { getSpacing } = result.current;

    expect(getSpacing("xs")).toBe("8px");
    expect(getSpacing("sm")).toBe("16px");
    expect(getSpacing("md")).toBe("24px");
    expect(getSpacing("lg")).toBe("32px");
    expect(getSpacing("xl")).toBe("40px");
    expect(getSpacing(10)).toBe("10px");
    expect(getSpacing("10")).toBe("10px");
  });

  it("getRadius should return correct values", () => {
    const { result } = renderHook(() => useStyles(theme));
    const { getRadius } = result.current;

    expect(getRadius("xs")).toBe("8px");
    expect(getRadius("sm")).toBe("16px");
    expect(getRadius("md")).toBe("24px");
    expect(getRadius("lg")).toBe("32px");
    expect(getRadius("xl")).toBe("40px");
    expect(getRadius(10)).toBe("10px");
    expect(getRadius("10")).toBe("10px");
  });
});
