import {test as base}from "./common_fixtures"
export const test = base.extend({
  url: async ({ page }, use) => {

    await page.goto(process.env.BASE_URL + "/web/index.php/dashboard/index");

    await use(page);

  },
    logout:async({logout},use)=>{
        await use()
        await logout.logoutaction()
    }
})