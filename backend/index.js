import express from "express";
import ImageKit from "imagekit"
import cors from "cors";
import mongoose from "mongoose";





const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL
}))


const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to Mongodb")
    } catch(err) {
        console.log(err);
    }
}

const imageKit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
})


app.get("/api/upload", (req, res) => {
    const result = imageKit.getAuthenticationParameters();
    res.send(result);
})

app.listen(port, () => {
    connect()
    console.log("Server is running on port number 3000")
})