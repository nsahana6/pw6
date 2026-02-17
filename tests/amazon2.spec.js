import{test}from "@playwright/test"
test("amazon",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("mobile")
    await page.keyboard.press('Enter')
//    await page.locator('//h2[@aria-label="iPhone Air 1 TB: Thinnest iPhone Ever, 16.63 cm (6.5″) Display with Promotion up to 120Hz, Powerful A19 Pro Chip, Center Stage Front Camera, All-Day Battery Life; Sky Blue"]//span').nth(0).waitFor({state:"visible"})
      let a= await page.locator('//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal" and contains(.,"POCO C71, Desert Gold (6GB, 128GB)")]//ancestor::div[@class="a-section a-spacing-small a-spacing-top-small"]//descendant::span[@class="a-price-whole"]').textContent()

    console.log(a)
})