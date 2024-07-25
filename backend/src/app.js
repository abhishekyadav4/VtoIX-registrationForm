
import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({urlencoded:false}));
app.use(express.static("public"));

// importing router 


import studentRouter from './routes/student.routes.js';
app.use('/api/v1/students',studentRouter)

export {app}