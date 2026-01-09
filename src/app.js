import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit:"16kb"})) //to limit the json input
app.use(express.urlencoded({extended:true, limit:"16kb"}))  //encoding in URL eg..space= %20
app.use(express.static("public")) //If someone requests a file, first check the public folder and serve it directly
app.use(cookieParser()) //Used to parse cookies from incoming requests and make them accessible via req.cookies.



export {app}