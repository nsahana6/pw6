import{test}from "@playwright/test"
test("amazon",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("iphone 17 pro")
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    let price =await page.locator('(//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"])[6]//ancestor::div[@class="puisg-col-inner"]//descendant::span[@class="a-price-whole"]').textContent();
    console.log(price)
})