import { expect, test } from "@playwright/test";

test("redirect to start page when access directly", async ({ page }) => {
  await page.goto("/play");
  await page.waitForURL("/start");

  await expect(page).toHaveURL(/.*start/);
});

test("redirect to play page when start button is clicked", async ({ page }) => {
  await page.goto("/start");

  await page.getByRole("button", { name: "Start" }).click();
  await page.waitForURL("/play");

  await expect(page).toHaveURL(/.*play/);
});
