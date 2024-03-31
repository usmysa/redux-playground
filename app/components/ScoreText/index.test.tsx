import { renderWithProviders } from "@/__tests__";
import { ScoreText } from ".";

describe("ScoreText", () => {
  it("renders correctly", () => {
    const { container } = renderWithProviders(<ScoreText />);

    expect(container).toMatchSnapshot();
  });
});
