import { renderWithProviders } from "@/__tests__";

import { LevelRadioGroup } from ".";

describe("LevelRadioGroup", () => {
  it("renders correctly", () => {
    const { container } = renderWithProviders(<LevelRadioGroup />);

    expect(container).toMatchSnapshot();
  });
});
