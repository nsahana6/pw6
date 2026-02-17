// In Playwright API automation, file upload is usually done using multipart/form-data. This is commonly used when uploading documents, images, or CSV files to the backend.

// In Playwright, we use the multipart option inside the request. We pass the file using a readable stream or buffer.

import{test}from "@playwright/test"
import fs from 'fs';
test("upload",async({page})=>{
await request.post('/upload', {
  multipart: {
    file: fs.createReadStream('testfile.pdf'),
    description: 'Sample file upload'
  }
});


//If the API expects raw binary data, we can use:

await request.post('/upload', {
  headers: {
    'Content-Type': 'application/octet-stream'
  },
  data: fs.readFileSync('testfile.pdf')
});

})