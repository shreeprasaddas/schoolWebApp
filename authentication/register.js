
import pass from "./password.js";
import database from "../user_database/user_crenditial.js";
import user_record from "../user_database/user_record.js";


const user_records = user_record;
const user_data = database;



const insert_data = async (name,email,password,address,phone_number1,phone_number2,grade,father_name,mother_name,parent_email,id)=>{
    console.log("Received name:"+name +" " +email);
    let passwd= await pass(password);
    try{
        await  user_records.insertMany({name:name,address:address,parent:{
            name:{
                father_name:father_name,
                mother_name:mother_name
            },
            phone_number:{
                number_1:phone_number1,
                number_2:phone_number2
            },
            email_id:parent_email
        },
        class:grade,
        user_id:id

    })
        await user_data.insertMany({name:name,email:email,password:passwd});
        
        return{
            register:true,
            error:false
        }
    }
    catch{
        const user=await user_data.findOne({email:email});
        let user_av=false;
        if (user.email == email){
            user_av=true
        }
        return{
            register:false,
            error:true,
            user_available:user_av
        }
    }
    
    
}
// console.log()
// let result = await insert_data("yeash","kumar@gmail.com","helloworld");



export default insert_data;
