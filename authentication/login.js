import database from "../user_database/user_crenditial.js";
import check from "./authentication.js";

const user_data=database;

const login =async (email,pass)=>{
    let isEmail;
   try{
    isEmail = await user_data.findOne({email:email});  
    if (email == isEmail.email){
        if (check(isEmail.name,pass)){
            return {
                name:isEmail.name,
                email:isEmail.email,
                pass:true,
                email_id:true


            }
        }
    }
   }
   catch{
        return {
             email_id:false,
             pass:false
    
        }
   }    


}




export default login;