import { configDotenv } from 'dotenv';
import express from 'express';
import todoHandler from './routes/todoHandler.js';
import mongoose from 'mongoose';
configDotenv();
const PORT = process.env.SERVER_PORT || 5300;
const app = express();
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xjdofai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("Connection successfull!"))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send("Hello world!")
})
app.use('/todo', todoHandler)

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`)
})