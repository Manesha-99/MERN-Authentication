import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import {port , mongoDbUrl} from "./config.js"


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(mongoDbUrl).then(()=>{
    app.listen(port, (req,res)=>{
        console.log(`Server is listening on port ${port}`);
    })
}).catch((error)=>{
    console.log(error);
})



