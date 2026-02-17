import{test,expect}from "@playwright/test"
test("colour",async({page})=>{
    await page.goto("https://www.amazon.in/")
   let a= await page.locator('//input[@id="nav-search-submit-button"]')
    await expect(a).toHaveCSS("background-color", "rgba(0, 0, 0, 0)")
})
// import { test, expect } from "@playwright/test";

// test("validate button color", async ({ page }) => {
//   await page.goto("https://www.amazon.in/");

//   const searchButton = page.locator('#nav-search-submit-button');

//   await expect(searchButton)
//     .toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
// });