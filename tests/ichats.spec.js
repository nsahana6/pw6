import{test}from "@playwright/test"
test("ichats",async({page})=>{
    await page.goto("https://www.icharts.in/opt/index.php")
    await page.locator('//h5[@class="bar-title" and @style="font-size:13px; padding-top:2px; padding-bottom:2px;"]//ancestor::div[@id="bar3"]//descendant::div[@class="singlebar2 positiveColor"]').nth(0).waitFor({state:"visible"})
let a=    await page.locator('//div[@id="bar3"]//h5|//h5[@class="bar-title" and @style="font-size:13px; padding-top:2px; padding-bottom:2px;"]//ancestor::div[@id="bar3"]//descendant::div[@class="singlebar2 positiveColor"]').allTextContents()
console.log(a)
})