import{test}from "../../customfixtures/hooks_fixture"
import{expect} from "@playwright/test"
import adminlogin from "../../testdata/adminlogin.json"
test.use({storageState:{
    cookiees:[],
    origins:[]
}})
// test("login module-to verify user can't login with invalid password",async({url,homePage,commonUtils})=>{
// const username=commonUtils.decryptData(process.env.USER_NAME)
// await homePage.adminlogin(username, adminlogin.wrongpassword)
// await expect(homePage.errorpopup).toHaveText(adminlogin.invalidcredential_text)
// })
// test("login module-to verify user can't login with invalid username",async({url,homePage,commonUtils})=>{
// const password=commonUtils.decryptData(process.env.PASSWORD)
// await homePage.adminlogin( adminlogin.wrong_username,password)
// await expect(homePage.errorpopup).toHaveText(adminlogin.invalidcredential_text)
// })
test("login module-to verify user can't login with invalid username and password",async({url,homePage,commonUtils})=>{
await homePage.adminlogin(adminlogin.wrongpassword, adminlogin.wrong_username)
await expect(homePage.errorpopup).toHaveText(adminlogin.invalidcredential_text)
})
