
import{test as Base} from "@playwright/test"
import adminlogin from "../testdata/adminlogin.json" 
import homepage from "../page_object_model/orangeHrmhome.page"
import { DashboardPage } from "../page_object_model/Dashboard.page"
import logout from "../page_object_model/userPage.page"

export const test =Base.extend({
      homePage:async({page},use)=>{
        const homePage=new homepage(page) 
        await use(homePage)
      },
      adminLogin:async({},use)=>{
        await use(adminlogin)
      },
     dashboardPage:async({page},use)=>{
      await use(new DashboardPage(page))
     },
     logout:async({page},use)=>{
      await use(new logout(page))
     }
})  