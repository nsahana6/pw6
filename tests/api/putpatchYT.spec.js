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


    const putrequest=await request.put(" https://restful-booker.herokuapp.com/booking/" +bookingID,{headers:{"Content-Type": "application/json",
        "Accept": "application/json","Cookie":"token="+token},
    data:{"firstname" : "sahana",
    "lastname" : "N",
    "totalprice" : 666,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
    }
    })
    const updatedresponse=await putrequest.json()
    console.log(updatedresponse)
    expect(updatedresponse.totalprice).toBe(666)


     const patchrequest=await request.patch(" https://restful-booker.herokuapp.com/booking/" +bookingID,{headers:{"Content-Type": "application/json",
        "Accept": "application/json","Cookie":"token="+token},
    data:{"firstname" : "Punarvika",
    "lastname" : "Narayan"
    }
    })
    const updatedresponse1=await patchrequest.json()
    console.log(updatedresponse1)
    expect(updatedresponse1.firstname).toContain("Punarvika")


})