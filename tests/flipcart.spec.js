import{test}from "@playwright/test"
test("flipcart",async({page})=>{
await page.goto("https://www.flipkart.com/")
// await page.locator('//input[@class="lNPl8b"]').click()
await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("iphone 16")
await page.keyboard.press("Enter")
await page.locator('//div[@class="RG5Slk"]|//div[@class="hZ3P6w DeU9vF"]').nth(0).waitFor({state:"visible"})
let price=await page.locator('//div[@class="RG5Slk"]|//div[@class="hZ3P6w DeU9vF"]').allTextContents()
console.log(price)
})