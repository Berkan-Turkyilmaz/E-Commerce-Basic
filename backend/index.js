import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import router from './routes/route.js';
import cors from 'cors';
import path from 'path';
dotenv.config();

const PORT = process.env.PORT || 5000
const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

app.use("/api/products", router)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
  }

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on PORT" ${PORT}`) 
})
