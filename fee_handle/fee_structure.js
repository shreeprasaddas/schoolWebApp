
import database from "../database_connection/database.js"


const db= await database;


const fee_struct= db.model("fee_stucture",{
    class:{
        type:String,
        unique:true
    },
    annual_fee:{
        type:Number,
        require:true,
    },
    monthly_fee:{
        type:Number,
        require:true
    },
    tution_fee:{
        type:Number,
    },
    hostel_fee:{
        type:Number
    },
    exam_fee:{
        type:Number
    },
    sports_fee:{
        type:Number
    },
    lab_fee:{
        type:Number,
    },
    transportation_fee:{
        type:Number
    }

    


});


export default fee_struct;

