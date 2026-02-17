import{test,expect}from "@playwright/test"
test("post restfull booker",async({request})=>{
    const authdata={
    "username" : "admin",
    "password" : "password123"}
    const result=await request.post("https://restful-booker.herokuapp.com/auth",{
        headers:{
             "Content-Type": "application/json"
        },
        data:authdata
    })
    console.log(result.status())
    // console.log(await result.json())
    const resp=await result.json()
    expect(resp.token).not.toBeNull() // checking we are not getting null value in token 
})
test.only("post restfull booker1",async({request})=>{
    const bookingdata={
   "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"}
    const results=await request.post("https://restful-booker.herokuapp.com/booking",{
        headers:{
             "Content-Type": "application/json"
        },
        data:bookingdata
    })
    console.log(results.status())
    // console.log(await result.json())
    const resp=await results.json()
    console.log(resp)
    expect(resp.bookingid).not.toBeNull()
    expect(resp.booking.firstname).toBe(bookingdata.firstname)
    const header= results.headers()
    expect(header["content-type"]).toContain("application/json")
})