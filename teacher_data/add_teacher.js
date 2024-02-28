import teacher_record from "./teacher_record.js";


const teacher = teacher_record;




const add_teacher = async(Name,phoneNumb,email,adderess,salry)=>{
    try {
        await teacher.insertMany({
            name:Name,adderess:adderess,phone_number:phoneNumb,email:email,salry:salry
        });
        return{
            error:false,
            dataInsert:true,
        }
    }
    catch{
        return{
            error:true,
            dataInsert:false,
        }

    }
};


export default add_teacher;
