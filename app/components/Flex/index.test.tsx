import { renderWithProviders } from "@/__tests__";
import { Flex } from ".";

describe("Flex", () => {
  it("renders correctly", () => {
    const { container } = renderWithProviders(<Flex />);

    expect(container).toMatchSnapshot();
  });
});
