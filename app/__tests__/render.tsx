import { ThemeProvider } from "@/providers/theme";
import { store } from "@/store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

export const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      <Provider store={store}>{ui}</Provider>
    </ThemeProvider>,
  );
};
