import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection=async()=>{
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;
    
    const MONGO_URI = `mongodb://${USERNAME}:${PASSWORD}@fileshare-shard-00-00.dyll5.mongodb.net:27017,fileshare-shard-00-01.dyll5.mongodb.net:27017,fileshare-shard-00-02.dyll5.mongodb.net:27017/?ssl=true&replicaSet=atlas-gmnyr6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=fileshare`;
    try{
        await mongoose.connect(MONGO_URI,{useNewUrlParser:true});
        console.log('Database connected successfully');
    }catch(error){
        console.error('error while connecting with the database',error.message);
    }
}

export default DBConnection;