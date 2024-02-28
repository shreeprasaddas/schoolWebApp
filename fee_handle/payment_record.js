import database from "../database_connection/database.js"


const db= database;

const payment = db.model("payment_record",{
    student_objId:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true,
    },
    date:{
        type:Date,
    },
   
});


export default payment;