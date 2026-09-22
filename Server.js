import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import ConnectDb from "./config/database.js";
import authRoutes from "./routers/authRoutes.js";
import postRoutes from "./routers/postRoutes.js";

dotenv.config({ path: './.env' });

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/post", postRoutes);

const startServer = async () => {
    try {
        await ConnectDb();

        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        });

        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT || 5000}`);
        });
    } catch (error) {
        console.log("MongoDB connection failed", error);
    }
};

startServer();


