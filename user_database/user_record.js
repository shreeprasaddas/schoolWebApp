import database from "../database_connection/database.js";


const db= await database;



const user_record = db.model("user_record",{
    name:{
        type:String,
        require:true,
        length:40
    },
    address:{
        type:String,
        require:true,
        length:90
    },
    email:{
        type:String,
        require:true,
        length:90
    },

    parent:{
        name:{
             father_name:{
                type:String,
                require:true
             },
             mother_name:{
                type:String,
                require:true
             }
        },

        phone_number:{
            number_1:{
                type:String,
            },
            number_2:{
                type:String
            }
        },


        email_id:{
            type:String,
            require:true,
            length:60,
            unique:true
        }
    },


    user_id:{
        type:Number,
        unique:true,
    },

    class:{
        type:String,
        require:true
    }


});


export default user_record;