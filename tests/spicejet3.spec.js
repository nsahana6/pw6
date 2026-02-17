import{test} from "@playwright/test"
test("gf",async({page})=>{
    await page.goto("https://www.spicejet.com/")
    await page.locator("//div[text()='To']/../descendant::input[@class='css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu']").fill("be")
})