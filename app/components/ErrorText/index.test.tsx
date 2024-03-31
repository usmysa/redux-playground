import { renderWithProviders } from "@/__tests__";
import { ErrorText } from ".";

describe("Error Text", () => {
  it("renders correctly", () => {
    const { container } = renderWithProviders(<ErrorText />);

    expect(container).toMatchSnapshot();
  });
});
