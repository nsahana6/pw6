import{test}from "@playwright/test"
test("amazon",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("mobile")
    await page.keyboard.press("Enter")
    // await page.locator('//h2[@class="a-size-small a-spacing-none a-color-base s-line-clamp-3 a-text-normal"]').nth(0).waitFor({state})
let a= await page.locator('//span[contains(.,"realme NARZO 80 Lite 5G (Crystal Purple, 4GB+128GB)")]').textContent()
console.log(a)
})