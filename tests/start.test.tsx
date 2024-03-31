import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/start");

  await expect(page).toHaveTitle(/Simple Typing/);
});

test("redirect to play page when start button is clicked", async ({ page }) => {
  await page.goto("/start");

  await page.getByRole("button", { name: "Start" }).click();
  await page.waitForURL("/play");

  await expect(page).toHaveURL(/.*play/);
});
