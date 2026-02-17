// import{test}from "@playwright/test"
// import adminlogin from "../../testdata/adminlogin.json" 
// import {homepage }from "../../page_object_model/orangeHrmhome.page"
// test("orange login",async({page})=>{
//     let home=new homepage(page)
//     await home.adminlogin(adminlogin.url,adminlogin.username,adminlogin.password)
    
// })
//............using costum fixture.............
// import {test}from "../../customfixtures/fixture"
// test("fixture",async({page,homePage,adminLogin})=>{
//      await homePage.adminlogin(adminLogin.url,adminLogin.username,adminLogin.password)
// })
//............using environment variable............
// import { log } from "node:console"
// import {test}from "../../customfixtures/fixture"
// import CommonUtils from "../../utils/common_utils";

// test("fixture",async({page,homePage,adminLogin})=>{
//     // console.log(process.env.BASE_URL);
//     // console.log(process.env.USER_NAME);
//     // console.log(process.env.PASSWORD);
//     const CommonUtilsObj= new CommonUtils()
//     CommonUtilsObj.encryptData("admin123")

//     const decrypteduserName=CommonUtilsObj.decryptData(process.env.USER_NAME);
//     const decryptedPassword=CommonUtilsObj.decryptData(process.env.PASSWORD);

    
// // //  await homePage.adminlogin(adminLogin.url,adminLogin.username,adminLogin.password)
//   await homePage.adminlogin(adminLogin.url,decrypteduserName,decryptedPassword)
//  })

 //.....................using common util fixtures.....................
//  import { test } from "../../customfixtures/common_fixtures";
import { expect } from "@playwright/test";
import {test}from "../../customfixtures/hooks_fixture"
import logout from "../../page_object_model/userPage.page";
// test.beforeEach("Before Each Hook",async({page})=>{
//     await page.goto(process.env.BASE_URL + "/web/index.php/dashboard/index")
// })
// test.afterEach("after each hook",async({logout})=>{
//     await logout.logoutaction
// })
 test("fixture1",async({page,homePage,dashboardPage,url})=>{
    
    // const decrypteduserName=CommonUtils.decryptData(process.env.USER_NAME);
    // const decryptedPassword=CommonUtils.decryptData(process.env.PASSWORD);

    
//  await homePage.adminlogin(adminLogin.url,adminLogin.username,adminLogin.password)

//  await page.goto(process.env.BASE_URL + "/web/index.php/dashboard/index");

  await expect(dashboardPage.dashboardTitleText).toBeVisible()

  console.log(await page.title());

});
test("fixture2",async({page,dashboardPage,url})=>{
    //  await page.goto(process.env.BASE_URL + "/web/index.php/dashboard/index");

  await expect(dashboardPage.dashboardTitleText)
    .toHaveText("Dashboard");

  console.log(await page.title());
  await expect(page).toHaveTitle("OrangeHRM")

})
test("fixture3",async({page,dashboardPage,url,logout})=>{
    //  await page.goto(process.env.BASE_URL + "/web/index.php/dashboard/index");//here this line is repeating in each of the test so we can use hooks

  await expect(dashboardPage.dashboardTitleText)
    .toHaveText("Dashboard");

  console.log(await page.title());
  await expect(page).toHaveTitle("OrangeHRM")

})




