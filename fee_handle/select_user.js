import user_record from "../user_database/user_record.js";




const user= await user_record;

const select_user= async(name,grade,roll)=>{
    const result =await user.findOne({name:name,class:grade,user_id:roll});
    if (result){
        return {obid:result._id.toString(),
                name:result.name,
                class:result.class,
                roll:result.user_id,
                user_available:true
        }

    }
    else{
        return{
            user_available:false
        }
    }
    
}


export default select_user;

