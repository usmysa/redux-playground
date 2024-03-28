import type { Theme } from "@/theme.types";
import { vars } from "@/styles/global/theme.css";
import { createContext, useContext } from "react";

const ThemeContext = createContext<Theme>(vars);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return <ThemeContext.Provider value={vars}>{children}</ThemeContext.Provider>;
};
