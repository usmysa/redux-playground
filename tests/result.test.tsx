import { expect, test } from "@playwright/test";

test("redirect to start page when access directly", async ({ page }) => {
  await page.goto("/result");
  await page.waitForURL("/start");

  await expect(page).toHaveURL(/.*start/);
});
