import{test}from "@playwright/test"
import { error } from "node:console"
// by default time is 30 seconds to run one api test
test ("check API health",async({request})=>{
    test.setTimeout(0)// there for test wont stop after 30 seconds 
    while(true){
       let start= Date.now()
    const response=await request.get("https://restful-booker.herokuapp.com/ping") 
    let end=Date.now()
    let duration=end-start
    
    if(duration>2000){
        throw new error(`API response is slow ${duration}`)
    }
    else{
       console.log(`total durartion for the respose is ${duration}`) 
    }
    const status= response.status()
    console.log(`response code from API is ${status}`)}
})