import{test,expect}from "@playwright/test"
test("spicejet",async({page})=>{
    await page.goto("https://www.spicejet.com/")
   await page.locator('//div[text()="To"]').click()
   await page.keyboard.insertText("be")
   await page.locator('//div[@data-testid="departure-date-dropdown-label-test-id"]').click()
   await page.locator('//div[@data-testid="home-page-travellers"]').click()
   await page.locator('//div[@data-testid="Adult-testID-plus-one-cta"]').click()
   await page.locator('//div[@data-testid="home-page-flight-cta"]').click()
   await page.locator('//div[@id="onward-flight-container"]/div').nth(0).waitFor({state:"visible"})
   let count=await page.locator('//div[@id="onward-flight-container"]/div').count()
   console.log(count)
   await expect(count).toBe(8)
})