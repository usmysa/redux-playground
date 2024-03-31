import { expect, test } from "@playwright/test";

test("redirect to start page", async ({ page }) => {
  await page.goto("/");
  await page.waitForURL("/start");

  await expect(page).toHaveURL(/.*start/);
});
