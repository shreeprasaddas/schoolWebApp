import bc, { hash } from "bcrypt";
const saltRound = 12;
const pass= async (passwd)=>{
    // console.log("recived parameters : " + passwd);
    const result =await bc.hash(passwd,saltRound);
    
    return result;
}

export default pass;