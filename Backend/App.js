import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js"
import { errorMiddleware } from "./error/error.js";
import router from "./routes/reservationRoute.js";
const app=express();
dotenv.config({path:"./config/config.env"});

app.use(cors({                  //connection with frontend // app.use eta for middleware
    origin:[process.env.Frontend_URL],
    methods:["POST"],
    credentials:true,
})
);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/resesvation",router)
dbConnection();  //database connection

app.use(errorMiddleware)

export default app;