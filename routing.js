import express, { urlencoded }  from "express";

const app = express();



app.use(express.urlencoded({extended:true}));
app.use(express.json());


const routing= ()=>{
    
}






app.listen(5000,(error)=>{
    if (error){
        console.log("connection failed");
    }
    else{
        console.log("connection success");
    }
});