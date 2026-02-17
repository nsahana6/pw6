// import {test} from '@playwright/test'

// test("this is Post Method",async ({request})=>{

//     const authData={
//                     "username" : "admin",
//                     "password" : "password123"
//                 }
//    let res= await request.post("https://restful-booker.herokuapp.com/auth",{headers:"Content-Type: application/json",data:authData});
//    console.log(res.status());
//    console.log(res.statusText());
//    console.log(await res.json());
//    expect(res.token).not.toBeNull();
   
// })

// test("this is Post Method",async ({request})=>{

//     const bookingData={
//                         "firstname" : "Jim",
//                         "lastname" : "Brown",
//                         "totalprice" : 111,
//                         "depositpaid" : true,
//                         "bookingdates" : {
//                             "checkin" : "2018-01-01",
//                             "checkout" : "2019-01-01"
//                         },
//                         "additionalneeds" : "Breakfast"
//                     }
//    let res= await request.post("https://restful-booker.herokuapp.com/booking",{headers:"Content-Type: application/json",data:bookingData});
//    console.log(res.status());
//    console.log(res.statusText());
//    console.log(await res.json());

//    console.log(res);
//     let resData=await res.json();
//    expect(resData.booking.firstname).toBe(bookingData.firstname)
//    expect(res.token).not.toBeNull();
// })


// test("Put Exaple",async ({request})=>{
//     let userCred={
//                     "username" : "admin",
//                     "password" : "password123"
//                 }
//     const respond=await request.post('https://restful-booker.herokuapp.com/auth',{headers:{"Content-Type": "application/json"},data:userCred});
//     let res=await respond.json();
//     let authToken=res.token;
//     console.log(authToken)
// })

import {test} from "@playwright/test"

test('POST',async({request})=>{
    const result= await request.post(
        "https://petstore.swagger.io/v2/pet",
        {headers:{"Content-Type":"application/json"},
        data:{
      "id": 0,
      "name": "sweety",
  "status": "available"}
})
    console.log(result.status());
   console.log(result.statusText());
   const responsebody=await result.json();
   console.log(responsebody);

     const id =await responsebody.id
     console.log("pet ID:"+ id)
});