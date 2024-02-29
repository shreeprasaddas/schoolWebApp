import use_crenditial from "../user_database/user_crenditial.js";
import login from "../authentication/login.js";
import register from "../authentication/register.js";
import token from "../authentication/token.js";
import express from "express";
import user_record from "../user_database/user_record.js";
import add_teacher from "../teacher_data/add_teacher.js";


const teacher = add_teacher;




const app=express();


// middleware 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/give",async(req,res)=>{

    res.json( await test(req.body.name,req.body.class));
})

app.post("/register",async(req,res)=>{
    const {name , email, password , address,phone_number1,phone_number2,grade,parent_email,id} =req.body;
    const registers = await register(name,email,password,address,phone_number1,phone_number2,grade,parent_email,id);
    res.json(registers);
});

app.post("/add",async(req,res)=>{
    const {name , email, password , address,phone_number1,phone_number2,grade,parent_email,id} =req.body;
    
})

app.post("/login",async(req,res)=>{
    const {email,password:pass} =req.body;
    const logins= await login(email,pass);
  
    if (logins.pass == true){
        console.log(await token({email,pass}));
        res.cookie("token",await token({email,pass}));
        
    }
    res.json(logins);
});

app.post("/addteacher",async(req,res)=>{
    
    try{
        const {Name,phoneNumb,email,adderess,salry} = req.body;
        await teacher(Name,phoneNumb,email,adderess,salry);
        return {
            error:false
        }
    }
    catch{
        return{
            error:true
        }

    }
})





app.listen(5000,(error)=>{
    if(error){
        console.log("connection failed");
    }
    else{
        console.log("connection success..")
    }
})





