import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import dotenv from 'dotenv';
import messageRouter from './router/messageRouter.js';
import cors from 'cors';

const app = express();

dotenv.config({path : "./config/config.env"});

app.use(cors({
    origin:  process.env.FRONTEND_URL, 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  }));


app.use(express.json());
app.use(express.urlencoded({ extended : true}));


app.get("/", (req, res) => {
    res.json({
        success : true,
        message: "HELLO WORLD!",
    });
});
app.use("/message",messageRouter);
dbConnection();

export default app;