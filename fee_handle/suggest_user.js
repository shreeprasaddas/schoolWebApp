import user_record from "../user_database/user_record.js";
import express, { urlencoded } from "express";
import ejs from "ejs";


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'ejs');


const suggest_user= async(query)=>{
    const user_search= query;
    let regex= RegExp(user_search,"i");
    try{
        const sugg= await user_record.find({name:regex},{name:1}).sort({name:1});
        // res.json(sugg);
        // console.log(sugg);
        return sugg;
    }
    catch{
        res.json({
            error:true
        });
        return {
            error:true,
            user_found:false
        }
    }
};



export default suggest_user;


