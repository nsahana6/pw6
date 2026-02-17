import{test,expect} from "@playwright/test"
import { assert } from "node:console"
test("get",async({request})=>{
    const result=await request.get(
        "https://petstore.swagger.io/v2/pet/9223372036854776000"    
    )
    let status=result.status()
    console.log(status)
    expect(status).toBe(404)
    let statustext=result.statusText()
    console.log(statustext)
    expect(statustext).toBe("Not Found")
    let res=await result.json()
    console.log(res)
    expect(res).toHaveProperty("type", "unknown")
    expect(res.message).toContain('java.lang.NumberFormatException:')
    console.log(result.headers())
    console.log(result.headersArray())
      
})