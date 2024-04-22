import express from 'express'
import cors from 'cors';
import {uploadRouter} from "./routes/uploadRouter";

export const app = express()

app.use(express.json())

app.use(cors({
    origin: '*', 
}));

app.use('/upload', uploadRouter) 
