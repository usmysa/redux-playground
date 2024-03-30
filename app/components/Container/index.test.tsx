import { renderWithProviders } from "@/__tests__";
import { Container } from ".";

describe("Container", () => {
  it("renders correctly", () => {
    const { container } = renderWithProviders(
      <Container>
        <div>Container</div>
      </Container>,
    );

    expect(container).toMatchSnapshot();
  });
});
