import{test}from "@playwright/test"
test("makemytrip",async({page})=>{
    await page.goto("https://www.makemytrip.com/")
    await page.locator('//img[@alt="minimize"]').click()
    await page.locator('//span[@class="commonModal__close"]').click()
    await page.locator('body').click()
    // await page.getByLabel('departure').click()
    // await page.locator()
})