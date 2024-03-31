import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/play");

  await expect(page).toHaveURL("/play");
  await expect(page).toHaveTitle(/Simple Typing/);
});
