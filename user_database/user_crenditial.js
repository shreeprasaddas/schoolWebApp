import database from "../database_connection/database.js";


const db= await database;


const user_data = await db.model("user_datas",{
    name:{
        type:String,
        require:true,

    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
});


export default user_data;