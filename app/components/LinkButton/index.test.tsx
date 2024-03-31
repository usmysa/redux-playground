import { renderWithProviders } from "@/__tests__";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router";
import { LinkButton } from ".";

describe("LinkButton", () => {
  it("renders correctly", () => {
    const routes = [
      {
        path: "/",
        element: <LinkButton label="Label" to="/test" />,
      },
      {
        path: "/test",
        element: <div>TEST</div>,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    const { container } = renderWithProviders(
      <RouterProvider router={router} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("redirect to path when button is clicked", async () => {
    const routes = [
      {
        path: "/",
        element: <LinkButton label="Label" to="/test" />,
      },
      {
        path: "/test",
        element: <div>TEST</div>,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    renderWithProviders(<RouterProvider router={router} />);

    const button = await screen.findByRole("button", { name: "Label" });
    fireEvent.click(button);

    await waitFor(() => {
      expect(router.state.location.pathname).toEqual("/test");
    });
  });
});
