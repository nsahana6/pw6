import{test,expect}from "@playwright/test"
test("assertion",async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
   let a=await page.locator('input[type="text"]')
   await a.fill("student")
   let b=await a.inputValue()
   await expect(b).toMatch(/^[A-Za-z]+$/)
   //asserting user name text field is not empty 
   await expect(a).not.toHaveValue("")
   //asserting it is editable
   await expect(a).toBeEditable()
   //asserting it has value
   await expect(a).toHaveValue("student")
   //screenshort asertion 
   await expect(page).toHaveScreenshot("screenshot.png")
   // to get html marcup of an element 
   let c =await page.locator('input[type="text"]').innerHTML()
   console.log(c)
    
})