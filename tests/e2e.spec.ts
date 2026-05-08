import { test, expect } from "@playwright/test";

const BASE = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:4173";

test("home page loads with correct heading", async ({ page }) => {
  await page.goto(`${BASE}/`);
  await expect(page).toHaveTitle(/Lantern Hill Advisory/);
  await expect(page.locator("h1")).toContainText(
    "Practical AI and technology advisory"
  );
});

test("home page shows focus areas section", async ({ page }) => {
  await page.goto(`${BASE}/`);
  await expect(page.getByText("AI Readiness & Strategy")).toBeVisible();
  await expect(page.getByText("Workflow & Process Design")).toBeVisible();
  await expect(page.getByText("Implementation Planning")).toBeVisible();
});

test("contact page loads with correct heading", async ({ page }) => {
  await page.goto(`${BASE}/contact`);
  await expect(page).toHaveTitle(/Contact/);
  await expect(page.locator("h1")).toContainText("Start a Conversation");
});

test("navigation from home to contact works", async ({ page }) => {
  await page.goto(`${BASE}/`);
  await page.getByRole("link", { name: "Start a Conversation" }).first().click();
  await expect(page).toHaveURL(/contact/);
  await expect(page.locator("h1")).toContainText("Start a Conversation");
});

test("navigation from contact back to home works", async ({ page }) => {
  await page.goto(`${BASE}/contact`);
  await page.getByRole("link", { name: /Lantern Hill Advisory LLC.*home/i }).click();
  await expect(page).toHaveURL(new RegExp(`${BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/?$`));
  await expect(page.locator("h1")).toContainText("Practical AI and technology advisory");
});
