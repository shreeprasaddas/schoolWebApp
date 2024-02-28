import fee_struct from "./fee_structure.js";
import express from "express";


const app= express();
const add_fee= fee_struct;


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.post("/addfee",async (req,res)=>{
    const {class:grade,monthly_fee,annual_fee,tution_fee,hostel_fee,lab_fee,sports_fee,exam_fee,transportation_fee}=req.body;
    try {
        const r =await add_fee.insertMany({
            class: grade,
            annual_fee: annual_fee,
            monthly_fee: monthly_fee,
            tution_fee: tution_fee,
            hostel_fee: hostel_fee,
            exam_fee: exam_fee,
            sports_fee: sports_fee,
            lab_fee: lab_fee,
            transportation_fee: transportation_fee
        });
        res.json({
            data_add:true,
            error:false
        })
    }
    catch{
        res.json({
            data_add:false,
            error:true
        })
    }
    
   

})




app.listen(3000,(err)=>{
    if (err){
        console.log("failed to conncet ");
    }
    else{
        console.log("connection successfully");
    }
})