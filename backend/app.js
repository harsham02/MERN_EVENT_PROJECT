import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import dotenv from 'dotenv';
import messageRouter from './router/messageRouter.js';
import cors from 'cors';

const app = express();

dotenv.config({path : "./config/config.env"});


const corsOptions = {
    origin: 'https://mern-event-project.vercel.app',
    Credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended : true}));


app.get("/", (req, res) => {
    res.json({
        success : true,
        message: "HELLO WORLD!",
    });
});
app.use("/api/v1/message",messageRouter);

app.options('*', cors(corsOptions));
dbConnection();

export default app;