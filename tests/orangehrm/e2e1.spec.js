 import { test } from "../../customfixtures/common_fixtures";
import { expect } from "@playwright/test";
 test("fixture1",async({page,dashboardPage})=>{
     await page.goto(process.env.BASE_URL + "/web/index.php/dashboard/index");

  await expect(dashboardPage.dashboardTitleText)
    .toHaveText("Dashboard");

  console.log(await page.title());
  await expect(page).toHaveTitle("OrangeHRM")

});
 