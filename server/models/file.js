import mongoose from "mongoose";

const FileSchema=new mongoose.Schema({
    path:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    downloadContent:{
        type:Number,
        required:true,
        default:0
    },
},{timestamps:true});

const File=mongoose.model('File',FileSchema);

export default File;