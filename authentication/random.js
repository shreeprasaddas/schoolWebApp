import pass from "./password.js";
import database from "../user_database/user_crenditial.js";
import user_record from "../user_database/user_record.js";

const user_records = user_record;
const user_data = database;

const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const insert_data = async () => {
    const numberOfRecords = 100;
    for (let i = 0; i < numberOfRecords; i++) {
        const name = `User ${i+1}`;
        const email = `user${i+1}@example.com`;
        const password = generateRandomString(10); // Generate a random password
        const address = `Address ${i+1}`;
        const phone_number1 = `123456789${i}`; // Just an example, generate as you need
        const phone_number2 = `987654321${i}`; // Just an example, generate as you need
        const grade = Math.floor(Math.random() * 12) + 1; // Random grade from 1 to 12
        const father_name = `Father ${i+1}`;
        const mother_name = `Mother ${i+1}`;
        const parent_email = `parent${i+1}@example.com`;

        const id = i + 1; // Assuming user IDs start from 1 and increment by 1

        const passwd = await pass(password);

        try{
            await  user_records.insertMany({name:name,address:address,parent:{
                name:{
                    father_name:father_name,
                    mother_name:mother_name
                },
                phone_number:{
                    number_1:phone_number1,
                    number_2:phone_number2
                },
                email_id:parent_email
            },
            class:grade,
            user_id:id
    
        })
            await user_data.insertMany({name:name,email:email,password:passwd});
            
            return{
                register:true,
                error:false
            }
        }
        catch{
            const user=await user_data.findOne({email:email});
            let user_av=false;
            if (user.email == email){
                user_av=true
            }
            return{
                register:false,
                error:true,
                user_available:user_av
            }
        }
        
        
    }
}

insert_data()
