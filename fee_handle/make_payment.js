import select_user from "./select_user.js";
import payment from "./payment_record.js";
import { ObjectId } from "mongodb";
import suggest_user from "./suggest_user.js";



const makePayment= async(obId,amount,date)=>{
    let pay_date;
        if (date){
            pay_date= new Date(date);
        }
        else{
            pay_date= new Date();
        }
    
        try{
            await payment.insertMany({student_objId:obId,amount:amount,date:date});
            return {
                error:false,
                payment:true
            }

        }
        catch {
            return {
                error : true,
                payment:false
            }
        }
    
}
const obid = await select_user("User 1","8",1);
const fobid= obid.obid;
console.log(fobid);
console.log(await makePayment(fobid,55000,'2025-5-9'));

export default makePayment;