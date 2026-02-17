import{test}from "@playwright/test"
import fs from "fs"
test("create booking using json",async({request})=>{
    const file=fs.readFileSync("./testdataAPI/bookingdata.json")
   const booking =JSON.parse(file)
    const result=await request.post("https://restful-booker.herokuapp.com/booking",{headers:{
        "Content-Type":"application/json"},
    data:booking
})
console.log(await result.json())
})