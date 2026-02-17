import{test}from "@playwright/test"
test("amazon",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("toy")
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    let [product]=await Promise.all([ page.waitForEvent("popup"),
         page.locator('//img[@alt="Hopping Walking Dog Toy with Sounds, Jumping Dog Wiggling Tails, Twitching Mouth and Nose, Educational Interactive Dog Toy..."]').click()
    ])
    await product.locator('//input[@id="add-to-cart-button"]').click()
    let time=new Date().getTime()
    await page.screenshot({path:`C:/Users/Manoj Nayak/Desktop/pw6/screenshot${time}.png`})
})