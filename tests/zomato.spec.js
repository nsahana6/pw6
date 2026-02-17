import{test,expect}from "@playwright/test"
test("zomato",async({page})=>{
    await page.goto("https://www.zomato.com/bangalore/restaurants")
    await page.locator('//div[@class="sc-jhaWeW bWqDUj pill_rating_range"]').click()
    await page.locator('//div[@class="sc-1q7bklc-1 cILgox"]').nth(0).waitFor({state:"visible"})
    let a=await page.locator('//div[@class="sc-1q7bklc-1 cILgox"]').allTextContents()
    for (let rating of a) {
  let value = parseFloat(rating);
  expect(value).toBeGreaterThanOrEqual(4)
}

})