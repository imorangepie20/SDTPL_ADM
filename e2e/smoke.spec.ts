import { test, expect } from "@playwright/test";

test("home redirects to default dashboard", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/dashboard\/default/);
});

test("dark mode applies the dark class", async ({ page }) => {
  await page.goto("/dashboard/default");
  await page.getByLabel("Toggle theme").click();
  await page.getByRole("menuitem", { name: "Dark" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
});
