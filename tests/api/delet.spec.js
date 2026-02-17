import{test}from "@playwright/test"
test("delet",async({request})=>{
    const result=await request.delete(
        "https://petstore.swagger.io/v2/pet/9223372036854776000"
    )
    console.log(result.status())
    
})