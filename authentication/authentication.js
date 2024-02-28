import bc from "bcrypt";

const verify = async (data,hash)=>{
    const result = await bc.compareSync(data,hash);
    return result;
    
}



export default verify;