import { renderWithProviders } from "@/__tests__";
import { Radio } from ".";

describe("<Radio />", () => {
  it("renders correctly", () => {
    const { container } = renderWithProviders(
      <Radio label="label" name="name" />,
    );

    expect(container).toMatchSnapshot();
  });
});
