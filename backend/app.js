import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {DBconnection} from "./Database/DBconnection.js"
import {errorMiddleware} from "./error/error.js"
import HomePage from "./routes/HomePage.js"
const app = express();

dotenv.config({path:"./config/config.env"})
app.use(
    cors({
        origin: [process.env.frontend_url],
        methods:["POST"],
        credentials:true
    })
);

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/HomePage",HomePage )

DBconnection();
app.use(errorMiddleware);
export default app;