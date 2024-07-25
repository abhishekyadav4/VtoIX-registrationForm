
import dotenv from 'dotenv';
dotenv.config();
import { app } from "./app.js";
import { dbConnection } from './db/conn.js';

const port = process.env.PORT || 5000


dbConnection()
app.listen(port,()=>{
    console.log(`server start at port ${port}`)
})