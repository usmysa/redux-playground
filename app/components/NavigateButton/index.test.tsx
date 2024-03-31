import { renderWithProviders } from "@/__tests__";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router";
import { NavigateButton } from ".";

describe("NavigationButton", () => {
  it("renders correctly", () => {
    const routes = [
      {
        path: "/",
        element: <NavigateButton label="Label" to="/test" />,
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

  it("call onBeforeNavigate only once when button is clicked", async () => {
    const onBeforeNavigate = vi.fn();
    const routes = [
      {
        path: "/",
        element: (
          <NavigateButton
            label="Label"
            onBeforeNavigate={onBeforeNavigate}
            to="/test"
          />
        ),
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
      expect(onBeforeNavigate).toHaveBeenCalledTimes(1);
      expect(router.state.location.pathname).toEqual("/test");
    });
  });

  it("do not call onBeforeNavigate when button is not clicked", async () => {
    const onBeforeNavigate = vi.fn();
    const routes = [
      {
        path: "/",
        element: <NavigateButton label="Label" to="/test" />,
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
      expect(onBeforeNavigate).toHaveBeenCalledTimes(0);
      expect(router.state.location.pathname).toEqual("/test");
    });
  });
});
