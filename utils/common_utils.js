
import CryptoJS from "crypto-js";
export default class CommonUtils{
    #secretkey
    /**
     * intializing the secret key
     */
constructor(){
    // this.secretkey=process.env.SECRET_KEY?process.env.SECRET_KEY:""
    if(process.env.SECRET_KEY){
        this.#secretkey=process.env.SECRET_KEY
    }
    else{
        throw new Error("please provide secret key while starting execution")
    }
}
/**
 *provide encrypted data for string  
 * @returns encrypted data
 */
encryptData(Data){
  const encryptedData=CryptoJS.AES.encrypt(Data,this.#secretkey).toString()
  console.log(encryptedData);
  return encryptedData
  
}
/**
 * provides the decrypted data in string formate
 * @returns decrypted data
 */
 decryptData(encData){
   const decryptData= CryptoJS.AES.decrypt(encData,this.#secretkey).toString(CryptoJS.enc.Utf8)
   return decryptData
}
    
}