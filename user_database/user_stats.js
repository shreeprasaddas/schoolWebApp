import user_record from "./user_record.js";
import database from "../database_connection/database.js";




const db= database;



const stats = database.model("user_stats",{
    class:{
        class_1:{
            type:Number,
            require:true
        },
        class_2:{
            type:Number,
            require:true
        },
        class_3:{
            type:Number,
            require:true
        },
        class_4:{
            type:Number,
            require:true
        },
        class_5:{
            type:Number,
            require:true
        },
        class_6:{
            type:Number,
            require:true
        },
        class_7:{
            type:Number,
            require:true
        },
        class_8:{
            type:Number,
            require:true
        },
        class_9:{
            type:Number,
            require:true
        },
        class_10:{
            type:Number,
            require:true
        },
    },
    fee_paid_class:{
        class_1:{
            type:Number,
            require:true
        },
        class_2:{
            type:Number,
            require:true
        },
        class_3:{
            type:Number,
            require:true
        },
        class_4:{
            type:Number,
            require:true
        },
        class_5:{
            type:Number,
            require:true
        },
        class_6:{
            type:Number,
            require:true
        },
        class_7:{
            type:Number,
            require:true
        },
        class_8:{
            type:Number,
            require:true
        },
        class_9:{
            type:Number,
            require:true
        },
        class_10:{
            type:Number,
            require:true
        }
    },

});



const stats_show = {
    class_1:await user_record.countDocuments(user_record.find({class:"1"})),
    class_2:await user_record.countDocuments(user_record.find({class:"2"})),
    class_3:await user_record.countDocuments(user_record.find({class:"3"})),
    class_4:await user_record.countDocuments(user_record.find({class:"4"})),
    class_5:await user_record.countDocuments(user_record.find({class:"5"})),
    class_6:await user_record.countDocuments(user_record.find({class:"6"})),
    class_7:await user_record.countDocuments(user_record.find({class:"7"})),
    class_8:await user_record.countDocuments(user_record.find({class:"8"})),
    class_9:await user_record.countDocuments(user_record.find({class:"9"})),
    class_10:await user_record.countDocuments(user_record.find({class:"10"})),
}


// const user = user_record;

// const querry =  user.find({class:"10"});

// const count = await user.countDocuments(querry)
console.log(stats_show);