import { rejects } from "assert";
import { promises } from "fs";
import Jwt from "jsonwebtoken";
import { resolve } from "path";

const secret_key = "helloworldhowareyou";
let result;


const token=  (user) => {
    return new Promise((resolve,rejects)=>{
          Jwt.sign(user,secret_key,{expiresIn:'100s'},(err,tokene)=>{
            if(err){
                rejects(err);
            }
            else{
                resolve(tokene);
            }
        
        });
    });
 

        
        
    };
    
    
    


   
export default token;