import{test} from "@playwright/test"
test("post",async({request})=>{
   let result= await request.post(
    "https://petstore.swagger.io/v2/pet",{
        headers:{
             "Content-Type":"application/json"
        },
        data:{
             
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "scoobie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"

        }
    }
   )

           console.log(result.status())
           console.log(result.statusText())
           const body=await result.json()
          const id=await body.id
          console.log(id)
})