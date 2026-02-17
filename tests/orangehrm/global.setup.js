import{test} from "../../customfixtures/common_fixtures"
import{expect}from "@playwright/test"

test("global setup for auto login",async({page,homePage,commonUtils,adminlogin,dashboardPage})=>{
    const decrypteduserName=commonUtils.decryptData(process.env.USER_NAME);
    const decryptedPassword=commonUtils.decryptData(process.env.PASSWORD);
    await homePage.adminlogin("Admin","admin123")
    await page.waitForURL(/dashboard/)
    await expect(dashboardPage.dashboardTitleText).toHaveText("Dashboard")
    await page.context().storageState({path:"./playwright/.auth/auth.json"})


})