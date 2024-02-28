import user_record from "./user_database/user_record.js";
import express, { urlencoded } from "express";
import ejs from "ejs";


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'ejs');


app.get('/search', async(req,res)=>{
    const user_search= req.query.q;
    let regex= RegExp(user_search,"i");
    try{
        const sugg= await user_record.find({name:regex});
        res.json(sugg);
        console.log(sugg);
    }
    catch{
        res.json({
            error:true
        })
    }
});

app.get("/",(req,res)=>{
    res.render("demo");
})


app.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server connected successfully");
    }
});



