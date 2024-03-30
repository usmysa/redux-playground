import { ThemeProvider } from "@/providers/theme";
import { store } from "@/store";
import { Provider } from "react-redux";

export const renderWithProviders = (ui: React.ReactElement) => {
  return (
    <ThemeProvider>
      <Provider store={store}>{ui}</Provider>
    </ThemeProvider>
  );
};
