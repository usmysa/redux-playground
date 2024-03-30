import { renderWithProviders } from "@/__tests__";
import { Timer } from ".";

describe("Timer", () => {
  it("renders correctly", () => {
    const { container } = renderWithProviders(<Timer width={100} />);

    expect(container).toMatchSnapshot();
  });
});
