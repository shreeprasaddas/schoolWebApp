import database from "../database_connection/database.js";



const db = database;


const teacher_record= db.model("teachers_record",{
    name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true,

    },
    email:{
        type:String,
    },
    phone_number:{
        type:String,
        require:true
    },
    salry:{
        type:Number,
        require:true,
    },
    
});



export default teacher_record;