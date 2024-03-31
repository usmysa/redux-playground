import { renderWithProviders } from "@/__tests__";
import { Card } from ".";

describe("Card", () => {
  it("renders correctly", () => {
    const { container } = renderWithProviders(
      <Card>
        <div>Card</div>
      </Card>,
    );

    expect(container).toMatchSnapshot();
  });
});
