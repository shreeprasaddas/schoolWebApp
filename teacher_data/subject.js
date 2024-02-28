import database from "../database_connection/database.js"


const db = database;


const subject= db.model("subject-structure",{
    class:{
        type:String,
        require:true,
    },
    subject_name:{
        subject_1:{
            teacher:{
                type:String,
                
            },
            sub_name:{
                type:String,
            }
            
        },
        subject_2:{
            teacher:{
                type:String,
                
            },
            sub_name:{
                type:String,
            }
            
        },
        subject_3:{
            teacher:{
                type:String,
                
            },
            sub_name:{
                type:String,
            }
            
        },
        subject_4:{
            teacher:{
                type:String,
                
            },
            sub_name:{
                type:String,
            }
            
        },
        subject_5:{
            teacher:{
                type:String,
                
            },
            sub_name:{
                type:String,
            }
            
        },
        subject_6:{
            teacher:{
                type:String,
                
            },
            sub_name:{
                type:String,
            }
            
        },
        subject_7:{
            teacher:{
                type:String,
                
            },
            sub_name:{
                type:String,
            }
            
        },
        subject_8:{
            teacher:{
                type:String,
                
            },
            sub_name:{
                type:String,
            }
            
        },
        subject_9:{
            teacher:{
                type:String,
                
            },
            sub_name:{
                type:String,
            }
            
        },
        subject_11:{
            teacher:{
                type:String,
                
            },
            sub_name:{
                type:String,
            }
            
        },
        subject_12:{
            teacher:{
                type:String,
                
            },
            sub_name:{
                type:String,
            }
            
        },
        subject_13:{
            teacher:{
                type:String,
                
            },
            sub_name:{
                type:String,
            }
            
        },
    }
});



export default subject;