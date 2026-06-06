import { test, expect } from "@playwright/test";

test("home redirects to default dashboard", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/dashboard\/default/);
});
