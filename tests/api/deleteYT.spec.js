import {test,expect}from "@playwright/test"
test("put",async({request})=>{
    let result=await request.post("https://restful-booker.herokuapp.com/auth",
       {headers:{"Content-Type": "application/json"}, data:{"username" : "admin",
    "password" : "password123"}} 
    )
    let jsonresponse=await result.json()
    const token=jsonresponse.token
    console.log(token)



   let newbookingresponse= await request.post("https://restful-booker.herokuapp.com/booking",{
        header:{"Content-Type": "application/json"},data:{
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
        }
    })
    const response= await newbookingresponse.json()
    const bookingID=response.bookingid
    console.log(bookingID)
    console.log(response)


    let deleterequest= await request.delete("https://restful-booker.herokuapp.com/booking/"+bookingID,{headers:{
        "Content-Type":"application/json",
         "Cookie": "token="+token
    }
})
 
console.log(deleterequest.status())
console.log(deleterequest.statusText())



const getrequest=await request.get("https://restful-booker.herokuapp.com/booking/"+bookingID)
console.log("======getid output======")
console.log(getrequest.status())
console.log(getrequest.statusText())
    






})