import mongoose from 'mongoose'

export async function connectionDB(){
try{
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log("mongodb connection established...");

    
}
catch(err){
    console.log("connection err",err);
    
}
}