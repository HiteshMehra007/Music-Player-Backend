import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./src/routes/auth.route.js";

dotenv.config({
    path: "./.env",
});

const app = express();

app.use(express.json({ limit: "100kb"}));

app.use(express.urlencoded({ extended: true}));

app.use(express.static("public"));

app.use(cookieParser());

// Routes

app.use("/api/auth", authRoutes);

export { app };