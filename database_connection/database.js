import mongoose from "mongoose";


const db= mongoose;
await db.connect('mongodb://localhost:27017',{dbName:'api_user'}).then(()=>{
    console.log("database connecected successfully......");
}).catch(()=>{
    console.log("database connection failed");
});



export default db;