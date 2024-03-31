import { renderWithProviders } from "@/__tests__";
import { LevelRadio } from ".";

describe("LevelRadio", () => {
  it("renders correctly", () => {
    const { container } = renderWithProviders(<LevelRadio value="Normal" />);

    expect(container).toMatchSnapshot();
  });
});
