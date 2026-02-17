import { test as base } from "./fixture"
import adminlogin from "../testdata/adminlogin.json"
import CommonUtils from "../utils/common_utils"

export const test=base.extend({
    commonUtils:async({},use)=>{
         use(new CommonUtils())
    },
     adminlogin:async({},use)=>{
        await use(adminlogin)
      }
})
