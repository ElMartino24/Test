import  express  from "express";
import mongoose from "mongoose";
import cors from "cors"
import {getUnicorns} from "./controller/unicorn.js"
import "dotenv/config" 


const server = express()

const PORT = process.env.PORT || 8080 

server.use(cors({ 
    origin:process.env.SPA_URI,

}))

server.use(express.json())

server.get("/unicorns",  getUnicorns)

mongoose.connect(process.env.MONGO_URI, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    

}).then(() => {

    server.listen(PORT)

}).catch((err) => {

    console.log(err)
})





