// import database from "../database_connection/database.js"

// import bc from "bcrypt";

// const hash = "$2b$12$uwr4OybWH4i67KBwKM428.pv6jH3XPrIB.sbf1ojqlOyR0VqnDYWq"
// const data = "shree";

// const verify = async ()=>{
//      const result =await bc.compareSync(data,hash);
//      console.log(result);
// }



// verify();

//  let  hello = "hi gus my name is shree";
//  let regex = RegExp(["term"],'i');

//  console.log(hello.replace(regex,"my"));


// import user_record from "./user_database/user_record.js";




// const sugg= async(names, cls)=>{
//     let cl=cls;
//     let name = names;

//     const user= user_record;
// let regex= RegExp(name,"i");
// let class_regex= RegExp(cl,"i");
// let roll_regex = RegExp("","i")

// let aregex;
// if (cl.length>0 || cl != undefined){
//     aregex={
//         name:regex,
//         class:class_regex
//     }
    
// }
// else{
//     aregex={
//         name:regex
//     }
// }
// const fin= await user.find(aregex)
// console.log(fin);

//  return fin;
// }

// export default sugg;



//#




// import  Jwt from "jsonwebtoken";


// import express, { response }  from "express";

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// let user;

// app.post("/send",(req,res)=>{
//     try {
//         const name= req.body.name;
//         const email= req.body.email;
       
//         user={
//             name,email
//         }
    
//       Jwt.sign(user,"helloworld",{expiresIn:'100s'},(error,token)=>{
//             res.json(token);
//       })
//     }
//     catch{
//         res.json({error:true});
//         console.log(req.body);
//     }
// });
// app.post("/login",(req,resp)=>{
//     resp.json(req.body);

// })

// console.log(user);
// app.listen(5000,(error)=>{
//     if(error){
//         console.log("connection failed");
//     }
//     else{
//         console.log("connection sucessful");
//     }
// });







// import user_record from "./user_database/user_record.js";

// const user = await user_record.findOne({ name: "John Doe" });

// if (user) {
//     const userIdString = user._id.toString();
//     console.log(userIdString);
// } else {
//     console.log("User not found");
// }



// import select_user from "./fee_handle/suggest_user.js";

// const user= await select_user("avinash");
// console.log(user[0].name)

import select_user from "./fee_handle/select_user.js";
import make_payment from "./fee_handle/make_payment.js"
import suggest_user from "./fee_handle/suggest_user.js";


const sUser= await suggest_user("avi")
console.log(sUser[0].name)

const user=await select_user(sUser[0].name,"8",1234567811)

if(user.user_available){
    const payment =await make_payment(user.obid,6000);
    console.log(payment);
}

