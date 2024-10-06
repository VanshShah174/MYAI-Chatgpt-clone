import mongoose, { mongo } from "mongoose";

const userChatsSchema = new mongoose.Schema({
    userID:{
        type:String,
        required:true
    },
    chats:[
        {
        _id:{
                type:String,
                required:true
            },
            title:{
                type:String,
                required:true
            },
            createdAt:{
                type:Date,
                default:Date.now(),
            },
        }
    ]
},{timestamps:true})

export default mongoose.models.userChats || mongoose.model("userChats", userChatsSchema);