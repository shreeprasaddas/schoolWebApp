import { name } from "ejs";
import user_record from "./user_database/user_record.js";


const user= user_record;


const querry = user.find({class:"9"});


const count = await user.countDocuments(querry);
console.log(count);